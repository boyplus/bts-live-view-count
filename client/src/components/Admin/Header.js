import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

class Header extends Component {
    state = { menu: 'Video' };
    renderAdmin() {}
    getClass(menu) {
        if (menu === this.state.menu) {
            return 'active item large text';
        } else {
            return 'item large text';
        }
    }
    renderMenu() {
        const menus = [
            { text: 'Video', to: '/' },
            { text: 'User', to: '/users' },
            { text: 'Admin', to: '/admins' },
        ];
        return _.map(menus, (menu, index) => {
            return (
                <Link
                    className={this.getClass(menu.text)}
                    onClick={() => this.setState({ menu: menu.text })}
                    to={menu.to}
                    key={index}
                >
                    {menu.text}
                </Link>
            );
        });
    }
    render() {
        return (
            <div
                className="ui secondary pointing menu"
                style={{ margin: '20px 0' }}
            >
                {this.renderMenu()}
                <Link className="item large text" to="/">
                    Live view
                </Link>
                <div className="right menu">
                    <a href="/api/logout" className="ui item large text">
                        Logout
                    </a>
                </div>
            </div>
        );
    }
}

export default Header;
