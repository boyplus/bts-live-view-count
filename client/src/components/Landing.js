import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../actions';
import Header from './Header';
import Videos from './Video/Videos';

class Landing extends Component {
    state = { config: null };
    async componentDidMount() {
        await this.props.fetchVideos();
        const config = (await axios.get('/api/config')).data;
        this.setState({ config });
        let times = 5 * 60 * 1000;
        times = 10000;
        setInterval(async () => {
            await this.props.fetchVideos();
        }, times);
    }

    render() {
        return (
            <div id="app">
                <Header></Header>
                <Videos
                    videos={this.props.videos}
                    config={this.state.config}
                ></Videos>
            </div>
        );
    }
}

function mapStateToProps({ videos }) {
    return { videos };
}
export default connect(mapStateToProps, actions)(Landing);
