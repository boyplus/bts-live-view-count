import React, { Component } from 'react';

import './style.css';

class Header extends Component {
    openNav() {
        console.log('open');
        document.getElementById('mySidenav').style.width = '250px';
    }
    closeNav() {
        console.log('close');
        document.getElementById('mySidenav').style.width = '0';
    }
    render() {
        return (
            <div>
                <div id="mySidenav" className="sidenav">
                    <a className="closebtn" onClick={this.closeNav}>
                        &times;
                    </a>
                    <a href="#">About</a>
                    <a href="#">Services</a>
                    <a href="#">Clients</a>
                    <a href="#">Contact</a>
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

export default Header;
