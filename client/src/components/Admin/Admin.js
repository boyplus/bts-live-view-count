import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';

class Admin extends Component {
    async componentDidMount() {}
    render() {
        return (
            <div>
                <Header></Header>
                <h1>Admin page</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Admin);
