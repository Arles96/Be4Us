import React, { Component } from 'react';
import './Header.css';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deep: props.isDeep()
        };
        this.BACK = this.BACK.bind(this);
    }

    BACK() {
        this.props.onBACK();
    }

    render() {
        let back = [];
        if(this.props.isDeep() === true) {
            back.push(<i onClick={this.BACK} className="Header-item grid-item grid-center fas fa-angle-double-left fa-lg" key="-3"/>)
        } else {
            back.push(<div className="grid-item" key="-3"/>)
        }

        return ( 
            <div className="Desk_Header grid-container">
                <div id="i1" className="grid-container-3 grid-item container-input">
                    {back}
                    <input type="text" className="form-control grid-item Color-dark-grey Height-1em input-navbar" placeholder="Buscar..." aria-label="Buscar" aria-describedby="basic-addon2" />
                    <i className="Header-item grid-item grid-center fas fa-search fa-lg"/>
                </div>
                <div id="i3" className="grid-item">
                    <a className="header-logo-default Color-white Width-fit-content mt-5">Be<i className="Color-logo-soft">4</i>Us</a>
                </div>
                <div id="i5" className="grid-container-3 grid-item">
                    <i className="Header-item grid-item grid-center fas fa-plus fa-lg"/>
                    <i className="Header-item grid-item grid-center fas fa-bell fa-lg"/>
                    <i className="Header-item grid-item grid-center fas fa-child fa-lg"/>
                </div>
            </div>
        );
    }
}

export default Header;