import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './style.css';

class Header extends Component {
    openNav() {
        document.getElementById('mySidenav').style.width = '300px';
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with google</a>
                    </li>
                );
            default:
                return [
                    <li key="1">
                        <Link to="/admin">Manage website</Link>
                    </li>,
                    <li key="2">
                        <a href="/api/logout">Logout</a>
                    </li>,
                ];
        }
    }
    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a className="closebtn" onClick={this.closeNav}>
                        &times;
                    </a>
                    <span className="textMenu">Sort by</span>
                    <ul>
                        <li>Most popular</li>
                        <li>Date added (oldest)</li>
                        <li>Date added (newest)</li>
                    </ul>
                    <span className="textMenu">Admin</span>
                    <ul>{this.renderContent()}</ul>
                </div>
                <div id="header">
                    <h1 id="textHeader">BTS live view count</h1>
                    <span className="hamburger" onClick={this.openNav}>
                        &#9776;
                    </span>
                </div>
            </div>
        );
    }
}

function mapeStateToProps(state) {
    return {
        auth: state.auth,
    };
}
export default connect(mapeStateToProps)(Header);
