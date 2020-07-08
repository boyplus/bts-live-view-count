import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
    state = { menu: 'Video' };
    menus = [
        { text: 'Video', to: '/admin/videos' },
        { text: 'User', to: '/admin/users' },
        { text: 'Admin', to: '/admin/admins' },
        { text: 'Live view', to: '/' },
    ];
    renderAdmin() {}
    getClass(menu) {
        return menu === this.state.menu ? 'bold' : 'link';
    }
    componentDidUpdate() {
        // console.log(this.props);
    }
    renderMenu() {
        return _.map(this.menus, (menu, index) => {
            return (
                <li key={index}>
                    <Link
                        className={this.getClass(menu.text)}
                        onClick={() => this.setState({ menu: menu.text })}
                        to={menu.to}
                    >
                        {menu.text}
                    </Link>
                </li>
            );
        });
    }
    renderUsername() {
        if (this.props.auth) {
            let name = this.props.auth.name.split(' ')[0].toLowerCase();
            name = name.charAt(0).toUpperCase() + name.slice(1);
            return <li>Hi, {name}</li>;
        } else {
            return null;
        }
    }
    openNav() {
        document.getElementById('myAdminSidenav').style.width = '250px';
    }
    closeNav() {
        document.getElementById('myAdminSidenav').style.width = '0px';
    }
    renderUser() {
        return (
            <li>
                <a href="/api/logout" className="linkAdmin">
                    <span>Signout</span>
                    <i
                        className="sign-out icon"
                        style={{ marginLeft: '6px' }}
                    ></i>
                </a>
            </li>
        );
    }
    render() {
        return (
            <div>
                <div className="navbar">
                    <div style={{ display: 'flex' }}>{this.renderMenu()}</div>
                    <div style={{ display: 'flex' }}>
                        {this.renderUsername()}
                        {this.renderUser()}
                    </div>
                </div>
                <div id="adminHamburger">
                    <div className="menu" onClick={this.openNav}>
                        <img
                            src="https://cdn2.iconfinder.com/data/icons/4web-3/139/menu-512.png"
                            alt="hamburger-icon"
                            height="40px"
                        ></img>
                    </div>
                </div>
                <div id="myAdminSidenav" className="adminSidenav">
                    <span className="closebtn" onClick={this.closeNav}>
                        &times;
                    </span>
                    <ul>
                        {this.renderMenu()}
                        {this.renderUser()}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
