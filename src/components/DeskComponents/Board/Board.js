import React, { Component } from 'react';
import './Board.css';
import Element from '../Element/Element';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: 0,
            currentLevel: props.levels,
            currentKey: 0,
            fatherkey: 0
        };
        this.GO = this.GO.bind(this);
    }
    
    GO(currentKey, nextLevel) {
        if (nextLevel !== null) {            
            this.props.onGO(currentKey);
        } else {
            alert("Fondo")
        }
    }


    render() {
        let cards = [];

        // Levels
        if (this.props.levels != null) {
            let levels = this.props.levels;
            for (let i = 1; i < this.props.path.length; i++) {
                levels = levels[this.props.path[i]].levels
            }
            levels.forEach((level) => {
                // Current Level
                cards.push(<Element GO={this.GO} title={level.title} date={level.date} image={level.image} levels={level.levels} key={level.key} id={level.key} description={level.description} />)
            });

        } else {
            cards.push(<i className="fas fa-snowflake fa-5x fa-spin Load-spinner" key="-1"></i>)
        }

        return (
            <div className="Board">
                <div className="Board-sections">
                    <div className="Board-section-1">
                        <i className="fas fa-caret-left fa-3x Board-arrows"></i>
                    </div>
                    <div className="Board-section-2 ">
                        {cards}
                    </div>
                    <div className="Board-section-3">
                        <i className="fas fa-caret-right fa-3x Board-arrows"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Board;