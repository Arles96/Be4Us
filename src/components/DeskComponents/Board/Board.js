import React, { Component } from 'react';
import './Board.css';
import Element from '../Element/Element';

class Board extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        if (this.props.entities.length>0){
            let data = this.props.entities.map((doc, i) => {
                return <Element 
                    delete={this.props.delete}
                    identifier={this.props.identifier} 
                    changeEntity={this.props.changeEntity} 
                    data={doc} 
                    key={i} />
            })
            return (
                <div className="Board">
                    <div className="Board-sections">
                        <div className="Board-section-1">
                            <i className="fas fa-caret-left fa-3x Board-arrows"></i>
                        </div>
                        <div className="Board-section-2 ">
                            {data}
                        </div>
                        <div className="Board-section-3">
                            <i className="fas fa-caret-right fa-3x Board-arrows"></i>
                        </div>
                    </div>
                </div>
            );
        }else {
           if (this.props.identifier===0) {
               return <div className="Board pt-5" ><h2 className="text-center">No hay Grupos</h2></div>
           }else if (this.props.identifier===1){
               return <div className="Board pt-5" ><h2 className="text-center">No hay Proyecto</h2></div>
           }else {
               return <div className="Board pt-5" ><h2 className="text-center">No hay tareas</h2></div>
           }
        }
    }
}

export default Board;