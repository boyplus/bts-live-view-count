import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';

class Admin extends Component {
    async componentDidMount() {
        
    }
    render() {
        return (
            <div>
                <Header></Header>
                <h1>Admin page</h1>
            </div>
        );
    }
}

export default Admin;
