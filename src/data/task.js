import {database, url, modeF} from './firebase'

/**
 * Funcion para agregar una tarea
 * @param  proyId id del proyecto o del padre
 * @param  title Titulo de la tarea
 * @param  content Desccripcion de la tarea
 * @param  duedate Fecha limite
 */
export const insertTask = (proyId, title, content, duedate) => {
    return fetch(`${url}/addTodo?proyID=${proyId}&title=${title}&content=${content}&dueDate=${duedate}`, modeF)
        .then(res => {
            return res
        })
        .catch( err => {
            console.log(err)
            return false
        })
}

export const removeTask = (proyId, taskId ) => {
    return fetch(`${url}/removeTodo?proyId=${proyId}&taskId=${taskId}`, modeF)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para agregar un usuario a una tarea
 * @param  uid uid del usuario de la app
 * @param  email email del usuario
 * @param  proyId id del proyecto
 * @param  taskId id de la tarea
 */
export const insertUserTask = (uid, email, proyId, taskId) => {
    return fetch(`${url}/addParticipantTask?uid=${uid}&email=${email}&proyId=${proyId}&taskId=${taskId}`, modeF)
        .then( res => {
            return res
        })
        .catch( err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para eliminar un usuario de una tarea
 * @param  uid uid del usuario de la app
 * @param  email email del usuario
 * @param  proyId id del proyecto
 * @param  taskId id de la tarea
 * @returns retorna una promesa con las respuesta
 */
export const removeUserTask=(uid, email, proyId, taskId) => {
    return fetch(`${url}/removeParticipantTask?uid=${uid}&email=${email}&proyId=${proyId}&taskId=${taskId}`, modeF)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para subir una imagen 
 * @param  taskId es el id de la tarea
 * @param  file es el archivo que se desea subir
 */
export const uploadImage = (taskID, file) => {
    storage().ref(`/${taskID}/${file.name}`).put(file)
}


/**
 * Funcion para una imagen del storage del usuario
 * @param taskId es el id de la tarea
 * @param filename es el nombre de la imagen
 */
export const removeImage = (taskId, filename) => {
    storage().ref(`/${taskId}/${filename}`).delete()
}

export const getUrlImage = (taskId) => {
    
}

export const updateTask = () => {
    return fetch(`${url}`, modeF)
}