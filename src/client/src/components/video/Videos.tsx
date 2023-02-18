import React from 'react';
import { Video } from '@/api/generated';
import VideoComponent from './Video';
import { getThumbnail } from '@/utils/getThumbnail';

type VideoProps = {
  videos: Video[];
}

const Videos: React.FC<VideoProps> = ({ videos }) => {
  return (
    <div className='videos-container'>
      {
        videos.map(({ videoId, title, currentView, currentLike, oldView, oldLike, thumbnails }) => (
          <VideoComponent
            key={videoId}
            id={videoId}
            title={title}
            currentView={currentView}
            currentLike={currentLike}
            oldView={oldView}
            oldLike={oldLike}
            thumbnail={getThumbnail(thumbnails)}
          />
        ))
      }
    </div>
  )
}

export default Videos;