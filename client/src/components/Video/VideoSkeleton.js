import React, { Component } from 'react';

import '../styles/style.css';

class VideoSkeleton extends Component {
    render() {
        return (
            <div id="video" className="card">
                <div
                    style={{
                        width: '100%',
                        height: '247.13px',
                        backgroundColor: '#E2E2E2',
                    }}
                ></div>

                <div style={{ padding: '10px' }}>
                    <div style={{ minHeight: '60px' }}>
                        <span className="fakeText">BTS Video Title</span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="eye icon"></i>
                        <h4 className="fakeText marginLeft">
                            This is view of video
                        </h4>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            marginTop: '5px',
                        }}
                    >
                        <div style={{ display: 'flex' }}>
                            <i className="thumbs up icon"></i>
                            <span className="fakeText marginLeft">
                                This is like
                            </span>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <i className="thumbs down icon"></i>
                            <span className="fakeText marginLeft">
                                This is dislike
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default VideoSkeleton;
