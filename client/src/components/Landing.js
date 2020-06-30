import React, { Component } from 'react';
import axios from 'axios';
import youtube from '../axios/youtube';

class Landing extends Component {
    async fetchData() {
        const res = await youtube.get('/videos', {
            params: {
                id: 'qAB1YaJDNbE',
            },
        });
        console.log(res);
    }

    async componentDidMount() {
        const res = await axios.get('/api/test');
        console.log(res.data);
    }

    render() {
        return (
            <div id="app">
                <h1>Landing</h1>
                <button onClick={this.fetchData}>fetch data</button>
            </div>
        );
    }
}

export default Landing;
