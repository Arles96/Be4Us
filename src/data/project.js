import {database, url} from './firebase'

/**
 * Funcion para agregar un proyecto 
 * @param  uid uid del usuario propietario
 * @param  description description del proyecto
 * @param  title titulo que contendra el proyecto 
 * @param  email email de usuario
 * @param  groupid el id del grupo o del padre
 * @param  dueDate la fecha limite que contendra el proyecto
 * @returns retorna un promesa con el valor false si ocurrio algun error, sino retorna la respuesta del servidor
 */
export const insertProject = (uid, email, description, title, groupid, dueDate) => {
    return fetch(`${url}/addProyect?uid=${uid}&email=${email}&title=${title}&content=${description}&groupId=${groupid}&dueDate=${dueDate}`)
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
 * @param  groupid el id del grupo o del padre
 * @param  dueDate la fecha limite que contendra el proyecto
 * @returns retorna una promesa con el valor false si ocurrio un error, sino retorna un respuesta del servidor
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
 * Funcion para eliminar un proyecto
 * @param  uid uid del usuario
 * @param  email email del usuario propietario
 * @param  proyid id del proyecto
 * @returns retorna un promesa con el valor false si ocurre un error, sino retorna la respuesta del servidor
 */
export const deleteProject = (uid, email, proyid) => {
    return fetch(`${url}/deleteProyect?uid=${uid}&email=${email}&proyId=${proyid}`)
        .then(res => {
            return res
        })
        .catch(err=> {
            console.log(err)
            return false
        })
}

/**
 * Funcion para obtener todos los proyectos de un grupo
 * @param cb callback para la capturar los valores de los proyectos de un grupo
 * @returns retorna una promesa con un valor json, que son level y listP 
 */
export const getAllProject = (cb) => {
    return database().ref('/proyects/').on('value', cb)
}
/**
 * Funcion para agregar un participante a un proyecto
 * @param  uid uid del usuario de la app
 * @param  email email del usuario
 * @param  proyId id del proyect
 * @returns retorna una promesa 
 */
export const insertUserProject = (uid, email, proyId) => {
    return fetch(`${url}/addParticipant?uid=${uid}&email=${email}&proyId=${proyId}`)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para eliminar un usuario de un proyecto
 * @param  uid uid del usuario de la app
 * @param  email email del usuario
 * @param  proyId id del proyectp
 * @returns retirna una promesa
 */
export const removeUserProject = (uid, email, proyId) => {
    return fetch(`${url}/removeParticipant?uid=${uid}&email=${email}&proyId=${proyId}`)
        .then( res => {
            return res
        })
        .catch( err => {
            console.log(err)
            return false
        })
}