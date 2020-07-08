import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Header from './Header';
import './style.css';

class Admin extends Component {
    state = { redirected: false };
    renderContent() {
        if (!this.props.auth) return null;
        if (this.props.auth.role === 'admin') {
            return <Header></Header>;
        } else {
            return (
                <div id="notAdmin">
                    <h1>You are not an admin</h1>
                    <div style={{ textAlign: 'center' }}>
                        <Link to="/">
                            <button className="ui secondary button">
                                Go to live view
                            </button>
                        </Link>
                    </div>
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
