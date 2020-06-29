import React, { Component } from 'react';
import axios from '../axios/axios';
import './App.css';

class App extends Component {
    async componentDidMount() {
        const res = await axios.get('/videos', {
            params: {
                id: '9IHwqdz8Xhw,D_6QmL6rExk',
            },
        });
        console.log(res.data);
    }
    render() {
        return (
            <div id="app">
                <h1>BTS live view count</h1>
            </div>
        );
    }
}

export default App;
