import React, { Component } from 'react';
import './ElementManager.css';
import {insertProject} from '../../../data/project'

class ElementManager extends Component {

    constructor() {
        super();
        this.state = {
        };
        this.GO = this.GO.bind(this);
    }

    GO() {
    }

    render() {
        // const { option, path, levels } = this.props;
        // let element = [];

        // let level = levels;
        // for (let i = 0; i < path.length; i++) {
        //     level = level[path[i]].levels
        // }

        // if (path.length === 0) {
        //     /*
        //     levels.forEach((level) => {
        //         // Current Level
        //         cards.push(<Element GO={this.GO} title={level.title} date={level.date} image={level.image} levels={level.levels} key={level.key} id={level.key} description={level.description} />)
        //     }); 
        //     */
        // } else if (path.length === 1) {

        // } else {

        // }
        alert()

        let data = insertProject('uid', 'email@myemail.com', 'description', 'title'); //deadline, fatherid
Promise.resolve(data).then((element) => {

        console.log(element);
}
    
);

        return (
            <div>
            {
                
            }
            </div>
        );
    }
}

export default ElementManager;