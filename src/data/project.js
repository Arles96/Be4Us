import {database, url, modeF, storage} from './firebase'

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
    return fetch(`${url}/addProyect?uid=${uid}&email=${email}&title=${title}&content=${description}&groupId=${groupid}&dueDate=${dueDate}`,modeF)
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
export const updateProject = (uid, email, proyid, title, description, groupId) => {
    return fetch(`${url}/updateProyect?uid=${uid}&email=${email}&proyid=${proyid}&title=${title}&content=${description}&groupId=${groupId}`,modeF)
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
export const deleteProject = (uid, email, proyid, groupId) => {
    return fetch(`${url}/deleteProyect?uid=${uid}&email=${email}&proyId=${proyid}&groupId=${groupId}`,modeF)
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
export const getAllProject = (groupId, cb) => {
    return database().ref('/groups/'+groupId+'/proyects/').on('value', cb)
}
/**
 * Funcion para agregar un participante a un proyecto
 * @param  uid uid del usuario de la app
 * @param  email email del usuario
 * @param  proyId id del proyect
 * @returns retorna una promesa 
 */
export const insertUserProject = (uid, email, proyId, groupId) => {
    return fetch(`${url}/addParticipant?uid=${uid}&email=${email}&proyId=${proyId}&groupId=${groupId}`,modeF)
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
export const removeUserProject = (uid, email, proyId, groupId) => {
    return fetch(`${url}/removeParticipant?uid=${uid}&email=${email}&proyId=${proyId}&groupId${groupId}`,modeF)
        .then( res => {
            return res
        })
        .catch( err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para subir una imagen 
 * @param  proyId es el id del proyecto
 * @param  file es el archivo que se desea subir
 */
export const uploadImageProject = (proyId, groupId, file) => {
    storage().ref(`/${proyId}/${file.name}`).put(file)
    storage().ref(`/${proyId}/${file.name}`).getDownloadURL().then(res => {
        fetch(`${url}/setImageProyect?proyId=${proyId}&imgUrl=${res}&groupId=${groupId}`, modeF)
    })
}


/**
 * Funcion para una imagen del storage del usuario
 * @param proyId es el id del proyecto
 * @param filename es el nombre de la imagen
 */
export const removeImageProject = (proyId, filename, groupId) => {
    storage().ref(`/${proyId}/${filename}`).delete()
    fetch(`${url}/setImageProyect?proyId=${proyId}&imgUrl=null&groupId=${groupId}`, modeF)
    
}

/**
 * Funciones para obtener los participantes de los proyectos
 * @param  proyId id del proyecto
 * @param  cb callback para obtener los datos
 */
export const getAllUsers = (proyId,groupId, cb) => {
    database().ref(`/groups/${groupId}/proyects/${proyId}/participants`).on('value', cb)
}