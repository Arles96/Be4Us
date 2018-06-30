import React, { Component } from 'react';
import './Path.css';

class Path extends Component {

    constructor() {
        super();
        this.state = {
            id: 0
        };
    }

    render() {
        let paths = [];

        // Levels
        if (this.props.levels != null) {
            let levels = this.props.levels;
            for (let i = 0; i < this.props.path.length; i++) {


                // Current Level
                let className = "";
                if (i === 0) {
                    className = "bodies"
                } else if (i === 1) {
                    className = "projects"
                } else {
                    className = "tasks"
                }
                paths.push(<a className={className} key={this.state.id++} >{levels[this.props.path[i]].title}/</a>)
                levels = levels[this.props.path[i]].levels
            }

        } else {
            paths.push(<a className="Loading-path" key="-2">Cargando</a>)
        }


        return (
            <div className="Path">
                <a className="Paths" >>> </a>
                {paths}
            </div>
        );
    }
}

export default Path;