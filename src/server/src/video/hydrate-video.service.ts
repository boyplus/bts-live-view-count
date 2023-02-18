import { Injectable } from '@nestjs/common';
import { Video } from 'src/schemas/video.schema';
import { VideoDetailResponse } from './model/video-detail-response';
import { VideoStatistics } from './model/video-stat';

@Injectable()
export class HydrateVideoService {
  hydrateVideoDetail(videoDetailResponse: VideoDetailResponse): Video | undefined {
    if (!videoDetailResponse.items.length) return undefined;
    const video = videoDetailResponse.items[0];

    const thumbnails = video.snippet.thumbnails;

    const videoDocument: Video = {
      videoId: video.id,
      title: video.snippet.title,
      currentView: parseInt(video.statistics.viewCount),
      currentLike: parseInt(video.statistics.likeCount),
      currentComment: parseInt(video.statistics.commentCount),
      oldView: parseInt(video.statistics.viewCount),
      oldLike: parseInt(video.statistics.likeCount),
      oldComment: parseInt(video.statistics.commentCount),
      thumbnails,
    };

    return videoDocument;
  }

  hydrateVideosStatistics(videoDetailResponse: VideoDetailResponse): VideoStatistics[] {
    const videos = videoDetailResponse.items;
    const timeStamp = new Date();
    const statistics = videos.map((video) => {
      return {
        videoId: video.id,
        currentView: parseInt(video.statistics.viewCount),
        currentLike: parseInt(video.statistics.likeCount),
        currentComment: parseInt(video.statistics.commentCount),
        timeStamp,
      };
    });

    return statistics;
  }
}
