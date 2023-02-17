import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video, VideoDocument } from 'src/schemas/video.schema';

import youtubeApi from '../youtube';
import { VideoDetailResponse } from './model/video-detail-response';

@Injectable()
export class VideoService {
  constructor(
    @InjectModel(Video.name) private readonly videoModel: Model<VideoDocument>,
    private readonly configService: ConfigService,
  ) {
    const apiKey = this.configService.get<string>('YOUTUBE_API_KEY');
    youtubeApi.defaults.params['key'] = apiKey;
  }

  async addVideo(videoId: string) {
    // Check whether the video already exist in database
    const existingVideo = await this.findByVideoId(videoId);
    if (existingVideo) {
      throw new BadRequestException('Vide already exists');
    }

    const videoDetail = await this.getVideoDetail(videoId);
    const video = this.hydrateVideoDetail(videoDetail);
    if (!video) throw new NotFoundException('Video not found');

    const newVideo = await new this.videoModel(video);
    await newVideo.save();
  }

  async findByVideoId(videoId: string): Promise<Video> {
    const video = await this.videoModel.findOne({ videoId: videoId });
    return video;
  }

  async getVideoDetail(youtubeId: string): Promise<VideoDetailResponse> {
    const res = await youtubeApi.get('/videos', {
      params: { id: youtubeId },
    });
    return res.data;
  }

  private hydrateVideoDetail(videoDetailResponse: VideoDetailResponse): Video | undefined {
    if (!videoDetailResponse.items.length) return undefined;
    const video = videoDetailResponse.items[0];

    const thumbnails = video.snippet.thumbnails;

    const videoDocument: Video = {
      videoId: video.id,
      title: video.snippet.title,
      oldView: parseInt(video.statistics.viewCount),
      oldLike: parseInt(video.statistics.likeCount),
      currentView: parseInt(video.statistics.viewCount),
      currentLike: parseInt(video.statistics.likeCount),
      thumbnails,
    };

    return videoDocument;
  }
}
