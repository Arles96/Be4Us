import {auth, database, storage} from './firebase'

const url = 'http://localhost:4000'

/**
 * Funcion para capturar la informacion del usuario
 */
export const getUser = () => {
   return fetch(`${url}/`).then(res => {
       return res
   })
   .catch(err => {
       return false
   })
}

export const signup = () => {
    fetch()
}

export const signin = () => {
    fetch()
}

/**
 * Funcion para subir una imagen 
 * @param  uid es el identificador del usuario
 * @param  file es el archivo que se desea subir
 */
export const uploadImage = (uid, file) => {
    storage().ref(`/${uid}/${file.name}`).put(file)
}


/**
 * Funcion para una imagen del storage del usuario
 * @param uid es el identificador del usuario
 * @param filename es el nombre de la imagen
 */
export const removeImage = (uid, filename) => {
    storage().ref(`/${uid}/${filename}`).delete()
}