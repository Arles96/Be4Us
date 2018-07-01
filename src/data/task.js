import {database, url} from './firebase'

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

export const updateTask = () => {
    return fetch(`${url}`)
}