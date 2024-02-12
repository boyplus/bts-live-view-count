import React from "react";
import { Video } from "@/api/generated";
import VideoComponent from "./Video";
import { getThumbnail } from "@/utils/getThumbnail";
import VideoSkeleton from "./VideoSkeleton";

type VideoProps = {
  videos: Video[];
  isLoading: boolean;
  error: any;
};

const skeletonVideos = Array(10).fill(0);

const Videos: React.FC<VideoProps> = ({ videos, isLoading, error }) => {
  const renderVideos = () => {
    if (error) {
    }
    return isLoading
      ? skeletonVideos.map((_, index) => <VideoSkeleton key={index} />)
      : videos.map(
          ({
            videoId,
            title,
            currentView,
            currentLike,
            currentComment,
            oldView,
            oldLike,
            oldComment,
            thumbnails,
          }) => (
            <VideoComponent
              key={videoId}
              id={videoId}
              title={title}
              currentView={currentView}
              currentLike={currentLike}
              currentComment={currentComment}
              oldView={oldView}
              oldLike={oldLike}
              oldComment={oldComment}
              thumbnail={getThumbnail(thumbnails)}
            />
          ),
        );
  };
  return <div className="videos-container">{renderVideos()}</div>;
};

export default Videos;
