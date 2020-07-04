import React, { Component } from 'react';

class Video extends Component {
    state = {
        oldView: parseInt(this.props.video.oldView, 10),
        newView: parseInt(this.props.video.newView, 10),
        nowView: parseInt(this.props.video.oldView, 10),
    };

    state = {
        ...this.state,
        interval: this.props.times / (this.state.newView - this.state.oldView),
    };

    mySet = null;
    componentDidMount() {
        const deltaView = this.state.newView - this.state.oldView;
        const times = this.props.times;
        const interval = times / deltaView;
        console.log(
            'diff is',
            deltaView,
            ' interval in state ',
            this.state.interval,
            ' ',
            this.props.video.title
        );

        this.mySet = setInterval(() => {
            if (this.state.nowView < this.state.newView) {
                this.setState({ nowView: this.state.nowView + 1 });
            }
        }, this.state.interval);
    }

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.video.newView !== this.props.video.newView) {
            console.log(
                'props is not the same, can update state ',
                this.props.video.title
            );
            const oldView = parseInt(this.props.video.oldView, 10);
            const newView = parseInt(this.props.video.newView, 10);
            const nowView = parseInt(this.props.video.oldView, 10);
            this.setState({ oldView, newView, nowView });
            const interval = this.props.times / (newView - oldView);
            this.setState({ interval });
            clearInterval(this.mySet);
            this.mySet = setInterval(() => {
                if (this.state.nowView < this.state.newView) {
                    this.setState({ nowView: this.state.nowView + 1 });
                }
            }, interval);
        }
    }

    renderVideo() {
        return (
            <div>
                {this.props.video.title}
                {this.state.nowView}
            </div>
        );
    }

    render() {
        return <div>{this.renderVideo()}</div>;
    }
}

export default Video;
