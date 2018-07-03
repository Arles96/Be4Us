import React, { Component } from 'react';
import './Element.css';

class Element extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

    render() {
        let title = this.props.data.val().title
        let date = this.props.data.val().dueDate
        let image = this.props.data.val().image
        let description = this.props.data.val().content
        if (!image){
            image = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfR8vP9Jv6HsU7LTM7r8FY3dUkExO-OH2nARhfabPRWbM1etRGQ"
        }
        return (
            <div onClick={()=> this.props.changeEntity(this.props.data)} className="Element card col">
                <div className="card-Title">{title}</div>
                <div className="text-muted">{date}</div>
                <img className="Img" src={image} alt="Card cap" />
                <div className="text-muted">{description}</div>
            </div>
        );
    }
}

export default Element;