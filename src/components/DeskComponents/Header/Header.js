import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        return ( 
            <div className="Desk_Header grid-container">
                <div id="i1" className="grid-container-3 grid-item container-input">
                    <div className="grid-item" />
                    <input type="text" className="form-control grid-item Color-dark-grey Height-1em input-navbar" placeholder="Buscar..." aria-label="Buscar" aria-describedby="basic-addon2" />
                    <i className="Header-item grid-item grid-center fas fa-search fa-lg"></i>
                </div>
                <div id="i3" className="grid-item">
                    <a className="header-logo-default Color-white Width-fit-content mt-5">Be<i className="Color-logo-soft">4</i>Us</a>
                </div>
                <div id="i5" className="grid-container-3 grid-item">
                    <i className="Header-item grid-item grid-center fas fa-plus fa-lg"></i>
                    <i className="Header-item grid-item grid-center fas fa-bell fa-lg"></i>
                    <i className="Header-item grid-item grid-center fas fa-child fa-lg"></i>
                </div>
            </div>
        );
    }
}

export default Header;