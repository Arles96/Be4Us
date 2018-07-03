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
        console.log()
        let data = this.props.path.map((doc, i) => {
            if (i===0) {
                return <a className="bodies" key={i} >{doc.val().title}</a>
            }else if (i===1){
                return <a className="projects" key={i} >>>{doc.val().title}</a>
            }else {
                return <a className="tasks" key={i} >>>{doc.val().title}</a>
            }
        })
        return (
            <div className="Path">
                <a className="Paths" >>> </a>
                {data}
            </div>
        );
    }
}

export default Path;