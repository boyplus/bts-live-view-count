import { Injectable } from '@nestjs/common';
import { Video } from 'src/schemas/video.schema';
import { VideoDetailResponse } from './model/video-detail-response';

@Injectable()
export class HydrateVideoService {
  hydrateVideoDetail(videoDetailResponse: VideoDetailResponse): Video | undefined {
    if (!videoDetailResponse.items.length) return undefined;
    const video = videoDetailResponse.items[0];

    const thumbnails = video.snippet.thumbnails;

    const videoDocument: Video = {
      videoId: video.id,
      timeStamp: new Date(),
      title: video.snippet.title,
      currentView: parseInt(video.statistics.viewCount),
      currentLike: parseInt(video.statistics.likeCount),
      thumbnails,
    };

    return videoDocument;
  }
}
