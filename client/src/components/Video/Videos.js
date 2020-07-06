import React, { Component } from 'react';

import Video from './Video';
import VideoSkeleton from './VideoSkeleton';
import Footer from '../Footer';

class Videos extends Component {
    renderVideos() {
        const videosSkeleton = [1, 2, 3, 4];
        if (this.props.videos === null || this.props.config === null) {
            return (
                <div>
                    <div className="row">
                        {videosSkeleton.map((video) => {
                            return (
                                <div className="col-lg-4 col-sm-6" key={video}>
                                    <VideoSkeleton
                                        video={video}
                                    ></VideoSkeleton>
                                </div>
                            );
                        })}
                    </div>
                    <Footer></Footer>
                </div>
            );
        }

        const videos = this.props.videos.videos;
        videos.forEach((video) => {
            video.nowView = video.oldView;
            video.nowLike = video.oldLike;
            video.nowDislike = video.oldDislike;
        });

        return (
            <div>
                <div className="row">
                    {videos.map((video, index) => {
                        return (
                            <div
                                className="col-lg-4 col-sm-6"
                                key={video.youtubeId}
                            >
                                <Video
                                    video={video}
                                    times={this.props.config.times}
                                ></Video>
                            </div>
                        );
                    })}
                </div>
                <Footer></Footer>
            </div>
        );
    }
    render() {
        return <div>{this.renderVideos()}</div>;
    }
}

export default Videos;
