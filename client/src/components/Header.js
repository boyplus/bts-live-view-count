import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';

class Header extends Component {
    openNav() {
        console.log('open');
        document.getElementById('mySidenav').style.width = '300px';
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
                    <span className="textMenu">Sort by</span>
                    <ul>
                        <li>Most popular</li>
                        <li>Date added (oldest)</li>
                        <li>Date added (newest)</li>
                    </ul>
                    <Link className="textMenu">Admin</Link>
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
