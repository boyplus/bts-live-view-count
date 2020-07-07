import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './Header.css';

class Header extends Component {
    state = { menu: 'Video' };
    renderAdmin() {}
    getClass(menu) {
        return menu === this.state.menu ? 'bold' : 'link';
    }
    componentDidUpdate() {
        console.log(this.props);
    }
    renderMenu() {
        const menus = [
            { text: 'Video', to: '/admin/videos' },
            { text: 'User', to: '/admin/users' },
            { text: 'Admin', to: '/admin/admins' },
            { text: 'Live view', to: '/' },
        ];
        return _.map(menus, (menu, index) => {
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
    render() {
        return (
            <div className="navbar">
                <div style={{ display: 'flex' }}>{this.renderMenu()}</div>
                <div style={{ display: 'flex' }}>
                    {this.renderUsername()}
                    <li>
                        <a href="/api/logout">Signout</a>
                        <i
                            className="sign-out icon"
                            style={{ marginLeft: '6px' }}
                        ></i>
                    </li>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { auth: state.auth };
}
export default connect(mapStateToProps)(Header);
