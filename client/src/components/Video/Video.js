import React, { Component } from 'react';

class Video extends Component {
    state = {
        oldView: parseInt(this.props.video.oldView, 10),
        newView: parseInt(this.props.video.newView, 10),
        nowView: parseInt(this.props.video.oldView, 10),
    };

    componentDidMount() {
        const deltaView = this.state.newView - this.state.oldView;
        const times = 5 * 60 * 1000;
        const interval = times / deltaView;

        console.log('props');
        console.log(this.props);

        setInterval(() => {
            if (this.state.nowView < this.state.newView) {
                this.setState({ nowView: this.state.nowView + 1 });
            }
        }, interval);
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
