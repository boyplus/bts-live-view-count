import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from '../actions';
import './styles/style.css';
import './styles/Header.css';

class Header extends Component {
    openNav() {
        document.getElementById('mySidenav').style.width = '300px';
    }
    closeNav() {
        document.getElementById('mySidenav').style.width = '0';
    }
    renderAdmin() {
        switch (this.props.auth) {
            case null:
                return <li>Loading...</li>;
            case false:
                return (
                    <li>
                        <a href="/auth/google">Login with google</a>
                    </li>
                );
            default:
                return [
                    <li key="1">
                        <Link to="/admin/videos">Manage website</Link>
                    </li>,
                    <li key="2">
                        <a href="/api/logout">Logout</a>
                    </li>,
                ];
        }
    }
    getClass(name) {
        return name === this.props.setting.sortBy ? 'bold' : 'link';
    }
    renderSortBy() {
        const links = [
            { text: 'Most view', name: 'view' },
            { text: 'Most like', name: 'like' },
            { text: 'Date added (oldest)', name: 'oldest' },
            { text: 'Date added (newest)', name: 'newest' },
        ];
        return _.map(links, ({ text, name }) => {
            return (
                <li
                    className={this.getClass(name)}
                    key={name}
                    onClick={() => this.props.updateSetting({ sortBy: name })}
                >
                    {text}
                </li>
            );
        });
    }
    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <span className="closebtn" onClick={this.closeNav}>
                        &times;
                    </span>
                    <span className="textMenu">Sort by</span>
                    <ul>{this.renderSortBy()}</ul>
                    <span className="textMenu">Admin</span>
                    <ul>{this.renderAdmin()}</ul>
                </div>
                <div id="header">
                    <h1 id="textHeader">BTS live view count</h1>
                    <div className="menu" onClick={this.openNav}>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-512.png"
                            alt="hamburger-icon"
                            height="40px"
                        ></img>
                    </div>
                </div>
            </div>
        );
    }
}

function mapeStateToProps(state) {
    return {
        auth: state.auth,
        setting: state.setting,
    };
}
export default connect(mapeStateToProps, actions)(Header);
