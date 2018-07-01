import {auth, database, storage} from './firebase'

const url = 'http://localhost:5000/b4us-e9e2a/us-central1'

/**
 * Funcion para capturar la informacion del usuario por medio del servidor
 * @param email puede ser el email o uid del usuario
 */
export const getUser = (email) => {
   return fetch(`${url}/`).then(res => {
       return res
   })
   .catch(err => {
       return false
   })
}


/**
 * Funcion para realizar el signup por medio del backend
 */
export const signupBackend = () => {
    fetch(`${url}/`)
}

/**
 * Funcion para verificar si esta en la base de datos del firestore
 * @param uid id del usuario con cuenta de terceros 
 */
export const signinSocialBakend = (uid) => {
    return fetch(`${url}/confirmLoginThirdParty?uid=${uid}`)
        .then(res => {
            return res
        })
        .catch(err=> {
            console.log(err)
            return false
        })
}

/**
 * Funcion para verificar si el usuario esta registra en la base de datos
 * @param  email email del usuario que se registro de manera estandar
 * @param  password password del usuario
 */
export const signinBackend = (email, password) => {
    return fetch(`${url}/confirmLogin?email=${email}&password=${password}`)
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