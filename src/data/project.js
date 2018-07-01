import {database} from './firebase'

const url = 'http://localhost:5000/b4us-e9e2a/us-central1'

/**
 * Funcion para agregar un proyecto 
 * @param  uid uid del usuario propietario
 * @param  description description del proyecto
 * @param  title titulo que contendra el proyecto 
 * @param  email email de usuario
 */
export const insertProject = (uid, email, description, title) => {
    return fetch(`${url}/addProyect?uid=${uid}&email=${email}&title=${title}&content=${description}`)
        .then( res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return false
        })
}
/**
 * Funcion para actualizar todos los datos del proyecto excepto la listas de las tareas
 * @param  uid uid del usuario propietario
 * @param  email email del usuario
 * @param  proyid id del proyecto
 * @param  title titulo del proyecto
 * @param  description descripcion del proyecto
 */
export const updateProject = (uid, email, proyid, title, description) => {
    return fetch(`${url}/updateProyect?uid=${uid}&email=${email}&proyid=${proyid}&title=${title}&content=${description}`)
        .then(res => {
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
