import _ from 'lodash';
import React, { Component } from 'react';

import Video from './Video';

class Videos extends Component {
    renderVideos() {
        if (this.props.videos === null) {
            return null;
        }
        for (let i = 0; i < this.props.videos.videos.length; i++) {
            this.props.videos.videos[i].nowView = this.props.videos.videos[
                i
            ].oldView;
        }

        return this.props.videos.videos.map((video, index) => {
            return (
                <div key={video.youtubeId}>
                    <Video
                        video={video}
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
