import React, { Component } from 'react';
import '../style.css';

class Video extends Component {
    constructor(props) {
        const times = props.times;
        const { newView, newLike, newDislike } = props.video;
        const { oldView, oldLike, oldDislike } = props.video;
        const { nowView, nowLike, nowDislike } = props.video;
        const viewInterval = times / (newView - oldView);
        const likeInterval = times / (newLike - oldLike);
        const dislikeInterval = times / (newDislike - oldDislike);
        super(props);
        this.state = { times, nowView, nowLike, nowDislike };
        this.state = { ...this.state, newView, newLike, newDislike };
        this.state = { ...this.state, oldView, oldLike, oldDislike };
        this.state = {
            ...this.state,
            viewInterval,
            likeInterval,
            dislikeInterval,
        };
    }

    mySet = null;
    myViewInterval = null;
    myLikeInterval = null;
    myDislikeInterval = null;
    updateState() {
        const times = this.props.times;
        const { newView, newLike, newDislike } = this.props.video;
        const { oldView, oldLike, oldDislike } = this.props.video;
        const { nowView, nowLike, nowDislike } = this.props.video;
        const viewInterval = times / (newView - oldView);
        const likeInterval = times / (newLike - oldLike);
        const dislikeInterval = times / (newDislike - oldDislike);

        this.setState({ oldView, oldLike, oldDislike });
        this.setState({ newView, newLike, newDislike });
        this.setState({ nowView, nowLike, nowDislike });
        this.setState({ viewInterval, likeInterval, dislikeInterval });
        this.updateInterval(viewInterval, likeInterval, dislikeInterval);
    }

    updateInterval(viewInterval, likeInterval, dislikeInterval) {
        this.myViewInterval = setInterval(() => {
            if (this.state.nowView < this.state.newView) {
                this.setState({ nowView: this.state.nowView + 1 });
            }
        }, viewInterval);

        this.myLikeInterval = setInterval(() => {
            if (this.state.nowLike < this.state.newLike) {
                this.setState({ nowLike: this.state.nowLike + 1 });
            }
        }, likeInterval);

        this.myDislikeInterval = setInterval(() => {
            if (this.state.nowDislike < this.state.newDiskike) {
                this.setState({ nowDislike: this.state.nowDislike + 1 });
            }
        }, dislikeInterval);
    }

    componentDidMount() {
        console.log(
            this.props.video.displayTitle,
            ' viewInterval is ',
            this.state.viewInterval
        );
        console.log(this.props.video);
        this.updateInterval(
            this.state.viewInterval,
            this.state.likeInterval,
            this.state.dislikeInterval
        );
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.video.newView !== this.props.video.newView) {
            console.log('update state ', this.props.video.title);
            clearInterval(this.myViewInterval);
            clearInterval(this.myLikeInterval);
            clearInterval(this.myDislikeInterval);
            this.updateState();
        }
    }

    renderVideo() {
        return (
            <div id="video" className="card">
                <img
                    className="center-cropped"
                    src={this.props.video.pic.url}
                    width="100%"
                    height="auto"
                ></img>

                <div style={{ padding: '10px' }}>
                    <div style={{ minHeight: '60px' }}>
                        <h4>{this.props.video.displayTitle}</h4>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <i className="eye icon"></i>
                        <h4 style={{ marginLeft: '5px' }}>
                            {this.state.nowView}
                        </h4>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <div>
                            <i className="heart icon"></i>
                            {this.state.nowLike}
                        </div>

                        <div>
                            <i className="heart outline icon"></i>
                            {this.state.nowDislike}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return <div>{this.renderVideo()}</div>;
    }
}

export default Video;
