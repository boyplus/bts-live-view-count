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

    componentDidMount() {
        const deltaView = this.state.newView - this.state.oldView;
        const times = this.props.times;
        const interval = times / deltaView;

        // console.log('props');
        // console.log(this.props.video);
        // console.log('delta view');
        // console.log(deltaView);
        // console.log('interval is ', interval);
        // console.log('times is ', this.props.times);
        console.log(
            'diff is',
            deltaView,
            ' interval in state ',
            this.state.interval
        );

        setInterval(() => {
            if (this.state.nowView < this.state.newView) {
                this.setState({ nowView: this.state.nowView + 1 });
            }
        }, this.state.interval);
    }

    componentDidUpdate(previousProps, previousState) {
        // console.log('inside update');
        if (previousProps.video.newView !== this.props.video.newView) {
            console.log('props is not the same, can update state');
            this.setState({
                oldView: parseInt(this.props.video.oldView, 10),
                newView: parseInt(this.props.video.newView, 10),
                nowView: parseInt(this.props.video.oldView, 10),
            });
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
