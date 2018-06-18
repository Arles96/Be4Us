import React, { Component } from 'react';
//import Grid from '@material-ui/core/Grid';
import ResizeDetector from 'react-resize-detector';

import './AboutUs.css';

class AboutUs extends Component {

    constructor() {
        super();
        this.state = {
            width: document.innerWidth,
            height: document.innerHeight,
            sizeFormat: 0
        };
        this.onResize = (width, height) => this.setState({ width, height });
        this.sizeChange = this.sizeChange.bind(this);
        this.setSizeChange = this.setSizeChange.bind(this);
    }

    setSizeChange() {
        this.setState({
            width: document.innerWidth,
            height: document.innerHeight
        });
        this.sizeChange();
    }

    sizeChange() {
        //console.log(this.state.width + ", " + this.state.height);
        if (this.state.width <= this.state.height * 0.5) {
            this.changeSizeFormat(0);
        } else {
            this.changeSizeFormat(0);
        }
    }
    changeSizeFormat(k) {
        //console.log(this.state.width + ", " + this.state.height);
        if (k === 0) {
            // document.getElementsByClassName("contain-about")[0].setAttribute("style", "margin-top: 7.5vh !important;")
            // document.getElementsByClassName("title-about")[0].setAttribute("style", "margin-top: 5vw !important; font-size: 10vw !important;")
            // document.getElementsByClassName("text-about")[0].setAttribute("style", "font-size: 3vw !important;")
        } else if (k === 1) {
            // document.getElementsByClassName("contain-about")[0].setAttribute("style", "margin-top: 10vh !important;")
            // document.getElementsByClassName("title-about")[0].setAttribute("style", "margin-top: 5vh !important; font-size: 10vh !important;")
            // document.getElementsByClassName("text-about")[0].setAttribute("style", "font-size: 3.5vh !important;")
        } else {
            // document.getElementsByClassName("contain-about")[0].setAttribute("style", "margin-top: 10vh !important;")
            // document.getElementsByClassName("title-about")[0].setAttribute("style", "margin-top: 5vw !important; font-size: 10vh !important;")
            // document.getElementsByClassName("text-about")[0].setAttribute("style", "font-size: 2.5vh !important;")
        }
    }


    render() {
        return (

            <div className="AboutUs" >
                <div className="contain-about" >

                    <h2 className="title-about" >¿Qué es <i id="color-soft">Be4Us</i>?</h2>
                    <p className="text-about" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>

                <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
                <ResizeDetector handleWidth handleHeight onResize={this.sizeChange} />
                {window.resizeTo(window.innerWidth, window.innerHeight)}
            </div>
        );
    }
}

export default AboutUs;
