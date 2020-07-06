import _ from 'lodash';
import React, { Component } from 'react';

import Video from './Video';

class Videos extends Component {
    renderVideos() {
        if (this.props.videos === null || this.props.config === null) {
            return null;
        }
        const videos = this.props.videos.videos;
        videos.forEach((video) => {
            video.nowView = video.oldView;
            video.nowLike = video.oldLike;
            video.nowDislike = video.oldDislike;
        });

        return (
            <div className="row">
                {this.props.videos.videos.map((video, index) => {
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
        );
    }
    render() {
        return <div>{this.renderVideos()}</div>;
    }
}

export default Videos;
