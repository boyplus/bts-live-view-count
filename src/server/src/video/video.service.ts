import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video, VideoDocument } from 'src/schemas/video.schema';
import { HydrateVideoService } from './hydrate-video.service';

import { YoutubeApiService } from './youtube-api.service';

@Injectable()
export class VideoService {
  constructor(
    @InjectModel(Video.name) private readonly videoModel: Model<VideoDocument>,
    private readonly youtubeApiService: YoutubeApiService,
    private readonly hydrateService: HydrateVideoService,
  ) {}

  async addVideo(videoId: string, customTitle: string) {
    // Check whether the video already exist in database
    const existingVideo = await this.findByVideoId(videoId);
    if (existingVideo) {
      throw new BadRequestException('Video already exists');
    }

    const video = await this.getVideoDetail(videoId);
    if (!video) throw new NotFoundException('Video not found');

    // Mutate the title if custom title is present
    if (customTitle !== undefined) {
      video.title = customTitle;
    }

    const newVideo = await new this.videoModel(video);
    await newVideo.save();
  }

  async getVideos() {
    const videos = await this.videoModel.find();
    return videos;
  }

  async findByVideoId(videoId: string): Promise<Video> {
    const video = await this.videoModel.findOne({ videoId: videoId });
    return video;
  }

  async getVideoDetail(youtubeId: string): Promise<Video> {
    const videoDetail = await this.youtubeApiService.getVideoDetail(youtubeId);
    const video = this.hydrateService.hydrateVideoDetail(videoDetail);
    return video;
  }

  async deleteVideo(videoId: string) {
    await this.videoModel.deleteOne({ videoId });
  }

  ///////////////////////////////
  // Update videos from youtube API
  ///////////////////////////////

  async updateVideosFromYoutubeApi() {
    const videos = await this.getVideos();
    const ids = videos.map((video) => video.videoId);
    const statisticsResponse = await this.youtubeApiService.getVideosStatistics(ids);
    const statistics = this.hydrateService.hydrateVideosStatistics(statisticsResponse);
    const newVideos = await Promise.all(
      statistics.map(async (stat, index) => {
        videos[index].oldView = videos[index].currentView;
        videos[index].oldLike = videos[index].currentLike;
        videos[index].oldComment = videos[index].currentComment;

        videos[index].currentView = stat.currentView;
        videos[index].currentLike = stat.currentLike;
        videos[index].currentComment = stat.currentComment;
        return await videos[index].save();
      }),
    );
  }
}
