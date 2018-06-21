import React, { Component } from 'react';
import ResizeDetector from 'react-resize-detector';

import './Particles.css';

class Particles extends Component {
    constructor() {
        super();
        this.state = {
            width: document.innerWidth,
            height: document.innerHeight,
            sizeFormat: 0
        };

        this.canvas = undefined;
        this.c = undefined;
        this.circles = [];
        this.mouse = {
            x: undefined,
            y: undefined
        };
        this.x = 100;
        this.y = 100;
        this.radius = 30;
        this.dx = 1;
        this.dy = 1;
        this.maxRadius = 40;
        this.minRadius = 2;
        this.colorArray = ['#384059', '#F1DE98', '#F0B885', '#D66761', '#EE6C62'];
        this.color = undefined;


        this.onResize = (width, height) => this.setState({ width, height });
        this.sizeChange = this.sizeChange.bind(this);
        this.setSizeChange = this.setSizeChange.bind(this);

        this.start = this.start.bind(this);
        this.initAll = this.initAll.bind(this);
        this.Circle = this.Circle.bind(this);
        this.animate = this.animate.bind(this);
    }
    setSizeChange() {
        this.setState({
            width: document.innerWidth,
            height: document.innerHeight
        });
        this.sizeChange();
    }

    sizeChange() {
    }

    Circle(x, y, dx, dy, radius) {
        this.colorArray = ['#384059', '#F1DE98', '#F0B885', '#D66761', '#EE6C62'];

        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        console.log(this.colorArray);
        this.color = this.colorArray[Math.floor(Math.random() * this.colorArray.length)];
        this.minRadius = radius;

        this.draw = function () {
            this.c.beginPath();
            this.c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
            this.c.fillStyle = this.color;
            this.c.fill();
        }

        this.update = function () {
            if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) {
                this.dx = -this.dx;
            }
            if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) {
                this.dy = -this.dy;
            }
            this.x += this.dx;
            this.y += this.dy;

            // Interaccion
            if (this.mouse.x - this.x < 50 && this.mouse.x - this.x > -50 && this.mouse.y - this.y < 50 && this.mouse.y - this.y > -50) {
                if (this.radius < this.maxRadius) {
                    this.radius += 1;
                }
            } else if (this.radius > this.minRadius) {
                this.radius -= 1;
            }

            this.draw();
        }
    }

    initAll() {
        this.circles = [];

        for (this.i = 0; this.i < 800; this.i++) {
            this.x = Math.random() * (this.canvas.width - this.radius * 2) + this.radius;
            this.y = Math.random() * (this.canvas.height - this.radius * 2) + this.radius;
            this.radius = Math.random() * 3 + 1;
            this.dx = (Math.random() - 0.5);
            this.dy = (Math.random() - 0.5);
            this.circle = new this.Circle(this.x, this.y, this.dx, this.dy, this.radius);
            this.circles.push(this.circle);
        }
    }

    animate() {
        requestAnimationFrame(this.animate); // Crea un loop infinitAllo para la animacion
        this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (this.i = 0; this.i < 800; this.i++) {
            this.circles[this.i].update();
        }
        //console.log(dx);


    }

    start() {
        console.log(document.getElementsByClassName('c-particles')[0]);
        this.canvas = document.getElementsByClassName('c-particles')[0];
        //console.log(this.canvas);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        this.c = this.canvas.getContext('2d');
        this.circles = [null, null];

        this.mouse = {
            x: undefined,
            y: undefined
        };
        // Circle
        this.x = 100;
        this.y = 100;
        this.radius = 30;
        this.dx = 1;
        this.dy = 1;
        this.maxRadius = 40;
        this.minRadius = 2;

        window.addEventListener('mousemove', function (event) {
            //console.log(event);
            this.mouse.x = event.x;
            this.mouse.y = event.y;

        });

        window.addEventListener('resize', function (event) {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
            this.initAll();
        });


        this.initAll();
        this.animate();
    }

    render() {
        return (
            <div className="Special-Canvas">
                <canvas className="c-particles"></canvas>
                <ResizeDetector handleWidth handleHeight onResize={this.onResize} />
                <ResizeDetector handleWidth handleHeight onResize={this.start} />
                {window.resizeTo(window.innerWidth, window.innerHeight)}
                {/*this.start()*/}
            </div>
        );
    }
}

export default Particles;