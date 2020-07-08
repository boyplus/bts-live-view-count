import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from './Header';
import './style.css';

class Admin extends Component {
    state = { redirected: false };
    renderContent() {
        if (!this.props.auth) return null;
        if (this.props.auth.role === 'admin') {
            return (
                <Header>
                    <h1>Admin Page</h1>
                </Header>
            );
        } else {
            return (
                <div id="notAdmin">
                    <h1>You are not an admin</h1>
                </div>
            );
        }
    }
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(Admin);
