import _ from 'lodash';
import React, { Component } from 'react';
import axios from 'axios';

class Landing extends Component {
    async componentDidMount() {
        console.log('fetch videos from database');
        const res = await axios.get('/api/videos');
        console.log(res.data);
        const videos = res.data.videos;
    }

    render() {
        return (
            <div id="app">
                <h1>Landing</h1>
                
            </div>
        );
    }
}

export default Landing;
