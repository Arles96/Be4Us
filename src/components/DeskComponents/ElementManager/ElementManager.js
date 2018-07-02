import React, { Component } from 'react';
import './ElementManager.css';
// import { insertProject } from '../../../data/project'

class ElementManager extends Component {

    constructor() {
        super();
        this.state = {
        };
    }

    handleSubmit(e){
        e.preventDefault()

    }

    render() {
        const levels = this.props.levels();
        const path = this.props.path;
        const management = this.props.management;
        const option = management.action;

        let subColor = "NONE";
        let elementType = "NONE";
        let managerAction = "NONE";
        let section = <div className="alert alert-primary" role="alert">Principal</div>
        let user;
        // let email;
        let fatherID = "";
        let image = "";


        let level = levels;
        for (let i = 0; i < path.length; i++) {
            fatherID = path[i];
            section = <div className="alert alert-primary" role="alert" >{level[path[i]].title}</div>
            image = level[path[i]].title;
            level = level[path[i]].levels;
        }


        if (option === 0) {
            managerAction = "Agregar";
            subColor = "success";
        } else if (option === 1) {
            managerAction = "Modificar";
            subColor = "primary";
        } else {
            managerAction = "Eliminar";
            subColor = "danger";
        }

        if (path.length === 0) {
            elementType = "Equipo";
            /*
            levels.forEach((level) => {
                // Current Level
                cards.push(<Element GO={this.GO} title={level.title} date={level.date} image={level.image} levels={level.levels} key={level.key} id={level.key} description={level.description} />)
            }); 
            */
        } else if (path.length === 1) {
            elementType = "Proyecto";

        } else {
            elementType = "Tarea";
        }


        // let element = [];

        // let level = levels;
        // for (let i = 0; i < path.length; i++) {
        //     level = level[path[i]].levels
        // }


        // let data = insertProject('uid', 'email', 'description', 'title', 'fatherid', 'dueDate')
        // Promise.resolve(data).then((element) => {

        //     console.log(element);
        // }

        // );
        if (option > -1) {
            return (
                <div className="nulo">
                    <canvas className="firewall"></canvas>
                    <div className="ElementManager" id="exampleModal" tabIndex="0" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">Agregar {elementType}</h5>
                                    <button type="reset" onClick={this.props.onCreate} className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body newElementForm">
                                    <form key="-4" className="needs-validation" noValidate>
                                        <div className="form-group newElementForm">
                                            <label htmlFor="validationCustom01" className="newElementForm">Titulo</label>
                                            <input name="title" className="form-control form-control-lg" id="validationCustom01" type="text" placeholder="Titulo..." required />
                                            <div className="valid-feedback">
                                                Correcto
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label className="newElementForm" >Sección actual:</label>{section}
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="validationCustom02" className="newElementForm" >Descripcion:</label>
                                            <textarea name="description" className="form-control" id="validationCustom02" placeholder="Descripcion..." rows="3" required></textarea>
                                            <div className="valid-feedback">
                                                Correcto
                                            </div>
                                        </div>
                                        <div className="form-group centered">
                                            <label className="newElementForm">Fecha limite:</label>
                                            <input type="date" className="date form-control" name="date" id="date" lang="es" />
                                        </div>
                                        <div className="form-group">
                                            <div className="custom-file">
                                                <input name="file" type="file" className="custom-file-input" id="customFileLang" lang="es" placeholder="Subir" />
                                                <label className=" newElementForm-1 custom-file-label" htmlFor="customFileLang">Imagen</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="reset" className="btn btn-secondary" onClick={this.props.onCreate} data-dismiss="modal">Cerrar</button>
                                    <button type="submit" className={"btn btn-" + subColor}>{managerAction}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default ElementManager;