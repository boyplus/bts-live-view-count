import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Video, VideoDocument } from 'src/schemas/video.schema';

import youtubeApi from '../youtube';

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
    const videoDetail = await this.getVideoDetail(videoId);
    console.log(videoDetail);
  }

  async getVideoDetail(youtubeId: string) {
    const res = await youtubeApi.get('/videos', {
      params: { id: youtubeId },
    });
    return res.data;
  }
}
