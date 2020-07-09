import React, { Component } from 'react';

import Video from './Video';
class Videos extends Component {
    renderVideos() {
        const videos = this.props.videos;
        if (videos === null) return null;
        return videos.map((video) => {
            return <Video video={video} key={video.youtubeId}></Video>;
        });
    }
    render() {
        return (
            <div>
                <h2>Edit video detail</h2>
                {this.renderVideos()}
            </div>
        );
    }
}

export default Videos;
