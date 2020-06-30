import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
    renderAdmin() {
        
    }
    render() {
        return (
            <div>
                <div className="ui secondary pointing menu">
                    <a className="active item large text">Videos</a>
                    <a className="item large text">Users</a>
                    <a className="item large text">Admins</a>
                    <div className="right menu">
                        <a className="ui item large text">Logout</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
