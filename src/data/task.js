import {database, url, modeF, storage} from './firebase'

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
 * Funcion para subir y guardar una image
 * @param  proyId id del proyecto
 * @param  taskId id de la tarea
 * @param  file Imagen que se desea subir
 */
export const uploadImage = (proyId, taskId, file) => {
    storage().ref(`/${proyId}/${taskId}/${file.name}`).put(file)
    storage().ref(`/${proyId}/${taskId}/${file.name}`).getDownloadURL().then(res => {
        fetch(`${url}/setImageTask?proyId=${proyId}&taskId=${taskId}&imgUrl=${res}`, modeF)
    })
}


/**
 * Funcion para eliminar una imagen
 * @param  proyId id del proyecto
 * @param  taskId id de la tarea
 * @param  filename nombre de la imagen
 */
export const removeImage = (proyId, taskId, filename) => {
    storage().ref(`/${proyId}/${taskId}/${filename}`).delete()
    fetch(`${url}/setImageTask?proyId=${proyId}&taskId=${taskId}&imgUrl=null`, modeF)
}

/**
 * Funcion para obtener todas las tareas de un proyecto
 * @param  proyectID Id del proyecto o padre
 * @param  cb callback para la base de datos
 */
export const getAllTask = (proyectID, cb) => {
    database().ref(`/proyects/${proyectID}/tasks`).on('value', cb)
} 

/**
 * Funcion para obtener los participantes de una tarea
 * @param  proyId id del proyecto
 * @param  taskId id de la tarea
 * @param  cb callback para obtener los datos
 */
export const getAllUsers = (proyId, taskId, cb) => {
    database().ref(`/proyects/${proyId}/tasks/${taskId}`).on('value', cb)
}