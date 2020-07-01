import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import * as actions from '../actions';

class Landing extends Component {
    async componentDidMount() {
        console.log('fetch videos from database');
        await this.props.fetchVideos();
        console.log(this.props.videos);
    }

    render() {
        return (
            <div id="app">
                <h1>Landing</h1>
            </div>
        );
    }
}

function mapStateToProps({ videos }) {
    return { videos };
}
export default connect(mapStateToProps, actions)(Landing);
