import React, { Component } from 'react';
import './ElementManager.css';
import {} from '../../../data/firebase'
import  {addGroup} from '../../../data/group'
import {insertProject} from '../../../data/project'
import {insertTask} from '../../../data/task'

class ElementManager extends Component {

    constructor() {
        super();
        this.state = {
            entity : null
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        let uid = this.props.user.uid
        let email = this.props.user.email
        let title = e.target.title.value
        let description = e.target.description.value
        let date = e.target.date.value
        if (this.props.identifier===0) {
            let data = addGroup(uid, email, title, description, date)
            Promise.resolve(data).then(res => {
                if(res){
                    alert("Se ha agregado un grupo")
                }else {
                    alert("No se pudo agregar un grupo")
                }
            })
        }else if (this.props.identifier===1){
            let fatherId = this.props.path[0].key
            let data = insertProject(uid, email, description, title, fatherId, date)
            Promise.resolve(data).then(res => {
                if (res){
                    alert("Se ha agregado un proyecto")
                }else {
                    alert("No se pudo agregar el proyecto")
                }
            })
        }else {
            let groupId = this.props.path[0].key
            let proyId = this.props.path[1].key
            console.log("group " + groupId + ", proyeTD" + proyId)
            let data = insertTask(proyId, groupId, title, description, date)
            Promise.resolve(data).then(res => {
                if (res) {
                    alert("Se ha agregado una tarea")
                }else {
                    alert("No se pudo agregar la tarea")
                }
            })
        }
    }

    componentDidMount(){
        if (this.props.identifier===0){
            this.setState({
                entity : "Grupo"
            })
        }else if (this.props.identifier===1){
            this.setState({
                entity : "Proyecto"
            })
        }else {
            this.setState({
                entity : "Tarea"
            })
        }
    }

    render() {
        return (
            <div className="nulo">
                <canvas className="firewall"></canvas>
                <div className="ElementManager" id="exampleModal" tabIndex="0" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="false">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Agregar {this.state.entity}</h5>
                                <button type="reset" onClick={this.props.closeModal}  className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body newElementForm">
                                <form key="-4" className="needs-validation" onSubmit={this.handleSubmit} noValidate>
                                    <div className="form-group newElementForm">
                                        <label htmlFor="validationCustom01" className="newElementForm">Titulo</label>
                                        <input name="title" className="form-control form-control-lg" id="validationCustom01" type="text" placeholder="Titulo..." required />
                                        <div className="valid-feedback">
                                            Correcto
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label className="newElementForm" >Sección actual:</label>
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
                                    <div className="modal-footer">
                                        <button type="reset" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                        <button type="submit" className="btn btn-success">Agregar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
        
    }
}

export default ElementManager;