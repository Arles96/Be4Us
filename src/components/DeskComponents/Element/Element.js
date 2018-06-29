import React, { Component } from 'react';
import './Element.css';

class Element extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
            date: props.date,
            image: props.image,
            
        };
    }

    render() {
        const { title, date, image } = this.props;
        return (
            <div className="Element card col">
                <div className="card-Title">{title}</div>
                <div className="text-muted">{date}</div>
                <img className="Img" src={image} alt="Card cap" />
                <div className="text-muted">{date}</div>
            </div>
        );
    }
}

export default Element;