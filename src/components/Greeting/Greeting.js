import React, { Component } from 'react';
import './Greeting.css';
//import Button from '@material-ui/core/Button';
import ResizeDetector from 'react-resize-detector';

class Greeting extends Component {

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
        this.draw = this.draw.bind(this);
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
        if ((this.state.height * 0.75) >= this.state.width && this.state.sizeFormat === 0) {
            this.changeSizeFormat(true);
        } else {
            this.changeSizeFormat(false);
        }
    }

    draw() {
        this.canvas_dark = document.getElementsByClassName("Canvas_Dark")[0];
        this.canvas_soft = document.getElementsByClassName("Canvas_Soft")[0];
        if ((this.canvas_dark + "") !== "undefined" && (this.canvas_soft + "") !== "undefined") {
            if (this.state.height <= this.state.width) {
                this.canvas_dark.width = this.state.height / 2;
                this.canvas_dark.height = this.state.height / 2;
                this.canvas_soft.width = this.state.height / 2;
                this.canvas_soft.height = this.state.height / 2;
            } else {
                this.canvas_dark.width = this.state.width / 2;
                this.canvas_dark.height = this.state.width / 2;
                this.canvas_soft.width = this.state.width / 2;
                this.canvas_soft.height = this.state.width / 2;
            }
        }
    }

    changeSizeFormat(k) {
        //console.log(this.state.width + ", " + this.state.height);
        if (k === true) {
            document.getElementsByClassName("Be_")[0].setAttribute("style", "margin-top: 20vw;")
            document.getElementsByClassName("text-greet")[0].setAttribute("style", "font-size: 7vw !important; margin: 10px; margin-top: 10vw;")
        } else {
            document.getElementsByClassName("Be_")[0].setAttribute("style", "margin-top: 10vh;")
            document.getElementsByClassName("text-greet")[0].setAttribute("style", "font-size: 4vh !important; margin: 10px; margin-top: 10vh;")
        }
    }


    render() {
        return (
            <div id="Home_" className="greeting">
                <div className="contain-greet" >
                    {/* Contenedor del Logo General*/}
                    <div className="grid-container">
                        <canvas id="Soft" className="canvas_g Canvas_Soft "></canvas>
                        <canvas id="Dark" className="canvas_g Canvas_Dark "></canvas>
                        <p className="Logo_ Be_">Be</p>
                        <p className="Logo_ For_">4</p>
                        <p className="Logo_ Us_">Us</p>
                    </div>
                    <h1 className="text-greet" >Descubre una manera más fácil para organizar y planificar tus eventos, colectivamente y en tiempo real.</h1>
                </div>
                <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
                <ResizeDetector handleWidth handleHeight onResize={this.sizeChange} />
                <ResizeDetector handleWidth handleHeight onResize={this.draw} />
                {this.draw()}
            </div>
        );
    }
}

export default Greeting;