import React, { Component } from 'react';
//import Grid from '@material-ui/core/Grid';
import ResizeDetector from 'react-resize-detector';
import img12 from '../../img/img12.png'
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

            <div id="AboutUs_" className="AboutUs" >
                <div className="contain-about row" >
                    <div className="col-sm-6" >
                        <h2 className="title-about ml-3" >¿Qué es <i id="color-soft">Be4Us</i>?</h2>
                        <p className="text-about ml-3 mt-4" >
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. Ut enim ad minim veniam. Duis aute irure dolor in reprehenderit in 
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        </p>
                    </div>
                    <div className="col-sm-6" >
                        <div className="img-container-img" >
                            <img className="img-about" src={img12} alt="Saludo" />
                        </div>
                    </div>
                </div>

                <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
                <ResizeDetector handleWidth handleHeight onResize={this.sizeChange} />
            </div>
        );
    }
}

export default AboutUs;
