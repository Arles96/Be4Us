import React, { Component } from 'react';
import './Header.css';
import {} from '../../../data/firebase'
import { auth } from 'firebase';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleSignOut = this.handleSignOut.bind(this)
    }

    handleSignOut(){
        auth().signOut()
        window.location = '/login'
    }    

    handleShowBack(){
        if (this.props.identifier>0){
            return <i onClick={this.props.goBack} className="Header-item grid-item grid-center fas fa-angle-double-left fa-lg" />
        }
    }

    render() {
        return (
            <div className="Desk_Header grid-container">
                <div id="i1" className="grid-container-3 grid-item container-input">
                    {this.handleShowBack()}
                    <input type="text" className="form-control grid-item Color-dark-grey Height-1em input-navbar" placeholder="Buscar..." aria-label="Buscar" aria-describedby="basic-addon2" />
                    <i className="Header-item grid-item grid-center fas fa-search fa-lg" />
                </div>
                <div id="i3" className="grid-item">
                    <a className="header-logo-default Color-white Width-fit-content mt-5">Be<i className="Color-logo-soft">4</i>Us</a>
                </div>
                <div id="i5" className="grid-container-3 grid-item">
                    <i onClick={this.props.openModal} className="Header-item grid-item grid-center fas fa-plus fa-lg" />
                    <i className="Header-item grid-item grid-center fas fa-bell fa-lg" />
                    <i onClick={this.handleSignOut} className="Header-item grid-item grid-center fas fa-child fa-lg fa-spin " />
                </div>
            </div>
        );
    }
}

export default Header;