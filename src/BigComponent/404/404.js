import React, { Component } from 'react'
import ResizeDetector from 'react-resize-detector';
import './404.css';

class Error_404 extends Component {

    constructor() {
        super();
        this.state = {
            width: document.innerWidth,
            height: document.innerHeight,
            sizeFormat: 0
        };
        this.onResize = (width, height) => this.setState({ width, height });
        this.sizeChange = this.sizeChange.bind(this);
        this.draw = this.draw.bind(this);
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
        if ((this.canvas_dark + "") !== "undefined" && (this.canvas_soft + "") !== "undefined") {
            if (this.state.height <= this.state.width) { } else { }
        }
    }

    render() {
        return (
            <div>
                <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
                <ResizeDetector handleWidth handleHeight onResize={this.sizeChange} />
                <ResizeDetector handleWidth handleHeight onResize={this.draw} />
                {window.resizeTo(window.innerWidth, window.innerHeight)}
                {this.draw()}
            </div>
        );
    }
}
export default Error_404;
