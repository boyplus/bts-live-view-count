import _ from 'lodash';
import React, { Component } from 'react';

import Video from './Video';

class Videos extends Component {
    renderVideos() {
        if (this.props.videos === null || this.props.config === null) {
            return null;
        }
        const videos = this.props.videos.videos;
        videos.forEach(video => {
            video.nowView = video.oldView;
            video.nowLike = video.oldLike;
            video.nowDislike = video.oldDislike;
        });

        return this.props.videos.videos.map((video, index) => {
            return (
                <div key={video.youtubeId}>
                    <Video
                        video={video}
                        times={this.props.config.times}
                    ></Video>
                </div>
            );
        });
    }
    render() {
        return (
            <div>
                <h1>These are videos list</h1>
                {this.renderVideos()}
            </div>
        );
    }
}

export default Videos;
