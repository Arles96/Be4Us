import React, { Component } from 'react';
import './Greeting.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ResizeDetector from 'react-resize-detector';

class Greeting extends Component {

    constructor() {
        super();
        this.state = {
            width: undefined,
            height: undefined,
            sizeFormat: 0
        };
        this.onResize = (width, height) => this.setState({ width, height });
        this.sizeChange = this.sizeChange.bind(this);
    }

    sizeChange() {
        /*45 vw + 60vh*/
        //console.log(this.state.width + ", " + this.state.height);
        if ((this.state.height * 0.8) >= this.state.width && this.state.sizeFormat == 0) {
            this.changeSizeFormat();
        }
    }

    changeSizeFormat() {
        document.getElementsByClassName("Be_").setAttribute("style", "font-size: 25vw !important;")
        document.getElementsByClassName("Us_").setAttribute("style", "font-size: 25vw !important;")
        document.getElementsByClassName("For_").setAttribute("style", "font-size: 45vw !important;")
    }

    render() {
        const { width, height } = this.state;
        return (
            <div className="greeting">
                <div className="contain-greet" >

                    {/* Contenedor del Logo General*/}
                    <div className="grid-container" >
                        <div>
                            <p className="Logo_ Be_">Be</p>
                            <p className="Logo_ Us_">Us</p>
                        </div>
                        <div >
                            <p className="Logo_ For_">4</p>
                        </div>
                    </div>
                    <p className="text-greet" >Descubre una manera más fácil para organizar y planificar tus eventos, colectivamente y en tiempo real.</p>
                </div>
                <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
                <ResizeDetector handleWidth handleHeight onResize={this.sizeChange} />
            </div>
        );
    }
}

export default Greeting;