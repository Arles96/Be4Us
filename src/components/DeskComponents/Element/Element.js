import React, { Component } from 'react';
import './Element.css';

class Element extends Component {

    constructor() {
        super();
        this.state = {
        };
        this.GO = this.GO.bind(this);
    }

    GO() {
        this.props.GO(this.props.id, this.props.levels);
    }

    render() {
        const { title, date, image, description, id } = this.props;
        return (
            <div id={id} onClick={this.GO} className="Element card col">
                <div className="card-Title">{title}</div>
                <div className="text-muted">{date}</div>
                <img className="Img" src={image} alt="Card cap" />
                <div className="text-muted">{description}</div>
            </div>
        );
    }
}

export default Element;