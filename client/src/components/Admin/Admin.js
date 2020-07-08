import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

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
    redirect() {
        const auth = this.props.auth;
        if (this.state.redirected === false && auth && auth.role !== 'admin') {
            this.setState({ redirected: true });
            this.props.history.push('/admin');
        }
    }
    componentDidMount() {
        this.redirect();
    }
    componentDidUpdate() {
        this.redirect();
    }
    render() {
        return <div>{this.renderContent()}</div>;
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}

export default connect(mapStateToProps)(withRouter(Admin));
