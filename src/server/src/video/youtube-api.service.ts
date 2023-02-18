import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import youtubeApi from 'src/youtube';
import { VideoDetailResponse } from './model/video-detail-response';

@Injectable()
export class YoutubeApiService {
  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('YOUTUBE_API_KEY');
    youtubeApi.defaults.params['key'] = apiKey;
  }

  async getVideoDetail(youtubeId: string): Promise<VideoDetailResponse> {
    const res = await youtubeApi.get('/videos', {
      params: { id: youtubeId },
    });
    return res.data;
  }

  async getVideosDetail(youtubeIds: string[]): Promise<VideoDetailResponse[]> {
    const ids = youtubeIds.join();
    const res = await youtubeApi.get('/videos', {
      params: { id: ids },
    });
    return res.data;
  }
}
