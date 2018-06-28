import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            width: document.innerWidth,
            height: document.innerHeight,
            sizeFormat: 0
        };
    }

    render() {
        return (
            <div className="Desk_Header grid-container">
                <div id="i1" className="grid-container grid-item">
                    <input className="grid-item Color-dark-grey Height-1em"></input>
                    <i className="grid-item grid-center fas fa-child fa-lg"></i>
                </div>
                <div id="i3" className="grid-item">
                    <a className="header-logo-default Width-fit-content" href="/Desk"><h1 className="Color-white Width-fit-content">Be<a className="Color-logo-soft">4</a>Us</h1></a>
                </div>
                <div id="i5" className="grid-container-3 grid-item">
                    <i className="grid-item grid-center fas fa-plus fa-lg"></i>
                    <i className="grid-item grid-center fas fa-bell fa-lg"></i>
                    <i className="grid-item grid-center fas fa-child fa-lg"></i>
                </div>
            </div>
        );
    }
}

export default Header;