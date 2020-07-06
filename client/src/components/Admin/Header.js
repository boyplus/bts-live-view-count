import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
    renderAdmin() {}
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <Link className="active item large text">Videos</Link>
                    <Link className="item large text">Users</Link>
                    <Link className="item large text">Admins</Link>
                    <div className="right menu">
                        <Link className="ui item large text">Logout</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
