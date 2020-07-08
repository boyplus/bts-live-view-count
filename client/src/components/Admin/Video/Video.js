import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
            <div>
                <p>{this.props.video.displayTitle}</p>
            </div>
        );
    }
}

export default Video;
