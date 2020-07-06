import React, { Component } from 'react';

import './style.css';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <h4 id="textFooter">
                    This website was created by Thanaphon Sombunkaeo
                </h4>
                <a
                    href="https://github.com/boyplus"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="big github icon"></i>
                </a>
                <a
                    href="https://www.facebook.com/thanaphon.sombunkaeo/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i class="big facebook icon"></i>
                </a>
            </div>
        );
    }
}

export default Footer;
