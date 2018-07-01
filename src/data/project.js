import {database} from './firebase'

const url = 'http://localhost:5000/b4us-e9e2a/us-central1'

/**
 * Funcion para agregar un proyecto 
 * @param  uid uid del usuario propietario
 * @param  description description del proyecto
 * @param  title titulo que contendra el proyecto 
 */
export const insertProject = (uid, description, title) => {
    return fetch(`${url}/`)
        .then( res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return false
        })
}

/**
 * Función para agregar una tarea a un proyecto
 * @param  title Titulo de la tarea
 * @param  description Descripcion de la tarea
 * @param  date Fecha limite
 */
export const insertTask = (title, description, date) => {
    return fetch(`${url}/`)
        .then(res => {
            return res
        })
        .catch( err => {
            console.log(err)
            return false
        })
}

/**
 * Función para agregar a un usuario en una tarea
 * @param  uid uid del usuario que se va agregar
 * @param name nombre del usuario que se agregara
 */
export const insertUserTask = (uid, name) => {
    return fetch(`${url}`)
        .then( res => {
            return res
        })
        .catch( err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para obtener todos los proyectos de un grupo
 * @param cb callback (funcion) para manipular los proyectos 
 */
export const getAllProject = (cb) => {
    database().ref().on('value', cb)
}
