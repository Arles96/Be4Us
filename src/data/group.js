import { url, modeF, database, storage } from './firebase'

/**
 * Funcion para agregar un grupos a la base de datos    
 * @param  uid uid del usuario de la app web
 * @param  email email del usuario
 * @param  title titulo del grupos
 * @param  content descripcion del grupos
 * @param  dueDate fecha limite
 */
export const addGroup = (uid, email, title, content, dueDate) => {
    return fetch(`${url}/addGroup?uid=${uid}&email=${email}&title=${title}&content=${content}&dueDate=${dueDate}`, modeF)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para eliminar un grupo
 * @param  uid uid del usuario de la app web
 * @param  email email del usuario
 * @param  groupId id del grupo
 */
export const deleteGroup = (uid, email, groupId) => {
    return fetch(`${url}/deleteGroup?uid=${uid}&email=${email}&groupId=${groupId}`, modeF)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para agregar un participante a un grupo  
 * @param  uid uid del usuario de la app web
 * @param  email email del usuario
 * @param  groupId id del grupo
 */
export const addParticipant = (uid, email, groupId) => {
    return fetch(`${url}/addParticipantGroup?uid=${uid}&email=${email}&groupId=${groupId}`, modeF)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para eliminar un participante del grupo
 * @param  uid uid del usuario de la app web
 * @param  email email del usuario
 * @param  groupId id del grupo
 */
export const removeParticipant = (uid, email, groupId) => {
    return fetch(`${url}/removeParticipantGroup?uid=${uid}&email=${email}&groupId=${groupId}`, modeF)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para obtener los datos de un grupo
 * @param  cb callback para obtener los datos del grupo
 */
export const getAllGroups = (cb) => {
    database().ref(`/groups/`).on('value', cb)
}

/**
 * Funcion para obtener los integrantes de un grupo
 * @param  groupID id del grupo
 * @param  cb callback para obtener los participantes de un grupo
 */
export const getAllParticipant = (groupID, cb) => {
    database().ref(`/groups/${groupID}/participants`).on('value', cb)
}

/**
 * Funcion para subir imagenes para un grupo    
 * @param  groupId id del grupo
 * @param  file imagen de desea subir
 */
export const uploadImage = (groupId, file) => {
    storage().ref(`/${groupId}/${file.name}`).put(file)
    storage().ref(`/${groupId}/${file.name}`).getDownloadURL().then(res => {
        fetch(`${url}/setImageGroup?groupId=${groupId}&imgUrl=${res}`, modeF)
    })
}

/**
 * Funcion para eliminar una imagen de fondo para el grupo
 * @param  groupId id del grupo
 * @param  filename nombre de la imagen
 */
export const removeImage = (groupId, filename) => {
    storage().ref(`/${groupId}/${filename}`).delete()
    fetch(`${url}/setImageGroup?groupId=${groupId}&imgUrl=null`, modeF)
}