import React, { Component } from 'react'
import './Desk.css';
import Header from '../../components/DeskComponents/Header/Header'
import Path from '../../components/DeskComponents/Path/Path'
import Board from '../../components/DeskComponents/Board/Board'
import ElementManager from '../../components/DeskComponents/ElementManager/ElementManager'
import { auth } from '../../data/firebase'
import {deleteProject} from '../../data/project'
import {removeTask} from '../../data/task'
import { getAllGroups, deleteGroup } from '../../data/group'

class Desk extends Component {

    constructor() {
        super();
        this.state = {
            groups : [],
            entities : [],
            path : [],
            entity : null,
            identifier : 0,
            user: null, 
            modal : false
        }
        this.handleCloseModal = this.handleCloseModal.bind(this)
        this.handleOpenModal = this.handleOpenModal.bind(this)
        this.handleChangeEntity = this.handleChangeEntity.bind(this)
        this.handleGoBack = this.handleGoBack.bind(this)
        this.handleRemoveEntity = this.handleRemoveEntity.bind(this)
    }

    handleRemoveEntity(key) {
        let uid = this.state.user.uid
        let email = this.state.user.email
        if (this.state.identifier===0) {
            let data = deleteGroup(uid, email, key)
            Promise.resolve(data).then(res => {
                if (res) {
                    alert("Se elimino un grupo")
                }else {
                    alert("Error al eliminar el grupo")
                }
            })
        }else if (this.state.identifier===1){
            let groupId = this.state.path[0].key
            let data = deleteProject(uid, email, key, groupId)
            Promise.resolve(data).then(res => {
                if (res) {
                    alert("Se elimino un proyecto")
                }else {
                    alert("Error al eliminar el proyecto")
                }
            })
        }else {
            let groupId = this.state.path[0].key
            let proyId = this.state.path[1].key
            let data = removeTask(proyId, groupId, key)
            Promise.resolve(data).then(res => {
                if (res) {
                    alert("Se elimino una tarea")
                }else {
                    alert("Error al eliminar la tarea")
                }
            })
        }
        
    }

    handleGoBack() {
        let path = this.state.path
        if (this.state.identifier===2){
            let groups = this.state.groups
            path.pop()
            let list = []
            groups.forEach(doc => {
                doc.forEach(pro => {
                    if (pro.key==="proyects"){
                        pro.forEach(pro2 => {
                            list.push(pro2)
                        })
                    }
                })
            })
            this.setState({
                identifier : 1, 
                entities : list, 
                path : path
            })
        }else {
            path.pop()
            this.setState({
                identifier : 0,
                entities : this.state.groups,
                path : path
            })
        }
    }

    handleOpenModal(){
        this.setState({
            modal : true
        })
    }

    handleCloseModal() {
        this.setState({
            modal : false
        })
    }

    handleChangeEntity(entity) {
        let path = this.state.path
        if (this.state.identifier===0) {
            path.push(entity)
            let list = []
            entity.forEach(doc => {
                if (doc.key==="proyects") {
                    doc.forEach(pro => {
                        list.push(pro)
                    })
                }
            })
            this.setState({
                entities : list,
                identifier : 1,
                path : path
            })
        }
        if (this.state.identifier===1){
            path.push(entity)
            let list = []
            entity.forEach(doc => {
                if (doc.key==="tasks") {
                    doc.forEach(pro => {
                        list.push(pro)
                    })
                }
            })
            this.setState({
                entities : list,
                identifier : 2,
                path : path
            })
        }
    }

    handleShowModal() {
        if (this.state.modal) {
            return (
                <ElementManager 
                    closeModal={this.handleCloseModal} 
                    user={this.state.user}
                    identifier={this.state.identifier}
                    path = {this.state.path}
                />
            )
        }
    }

    componentWillMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                getAllGroups((snapshot)=> {
                    let list = []
                    snapshot.forEach(doc => {
                        if (doc.val().owner===user.uid){
                            list.push(doc)
                        }
                    })
                    this.setState({
                        groups : list,
                        entities : list
                    })
                    if (this.state.identifier===1){
                        list = []
                        let group = this.state.path[0]
                        this.state.groups.forEach(doc=> {
                            if (doc.key===group.key) {
                                doc.forEach(pro => {
                                    if(pro.key==="proyects"){
                                        pro.forEach(pro2 => {
                                            list.push(pro2)
                                        })
                                    }
                                })
                            }
                        })
                        this.setState({
                            entities : list
                        })
                    }
                    if (this.state.identifier===2){
                        list = []
                        let group = this.state.path[0]
                        let proy = this.state.path[1]
                        this.state.groups.forEach(doc=> {
                            if (doc.key===group.key) {
                                doc.forEach(pro => {
                                    if(pro.key==="proyects"){
                                        pro.forEach(pro2 => {
                                            if (pro2.key===proy.key){
                                                pro2.forEach(task => {
                                                    if (task.key==="tasks"){
                                                        task.forEach(task2 => {
                                                            list.push(task2)
                                                        })
                                                    }
                                                })
                                            }
                                        })
                                    }
                                })
                            }
                        })
                        this.setState({
                            entities : list
                        })
                    }
                })
                this.setState({user})
            } else {
                window.location = '/Login';
            }
        });

    }
    
    render() {
        return (
            <div className="Desk">
                {this.handleShowModal()}
                <Header openModal={this.handleOpenModal} goBack={this.handleGoBack} identifier={this.state.identifier} />
                <Path path={this.state.path} />
                <Board 
                    entities={this.state.entities}  
                    changeEntity={this.handleChangeEntity}
                    identifier={this.state.identifier}
                    delete={this.handleRemoveEntity}
                />
            </div>
        )
    }

}

export default Desk;