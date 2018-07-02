import {storage, url, modeF} from './firebase'

/**
 * Funcion para capturar la informacion del usuario por medio del servidor
 * @param email puede ser el email o uid del usuario
 */
export const getUser = (email) => {
   return fetch(`${url}/`, modeF).then(res => {
       return res
   })
   .catch(err => {
       return false
   })
}

/**
 * Funcion para hace un signupde terceros
 * @param uid id del usuario
 * @param empresa Empresa del usuario
 */
export const signupSocialBackend = (uid, empresa) => {
    return fetch(`${url}/signUpThirdParty?uid=${uid}&empresa=${empresa}`, modeF)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })
}

/**
 * Funcion para signup de usuario con correo y password
 * @param  uid uid del usuario de la app
 * @param email correo del usuario
 * @param name Nombre completo del usuario
 * @param password Contraseña del usuario
 * @param empresa empresa o universidad del usuario
 * @returns Retorna una promesa
 */
export const signupBackend = (uid, email, name, password, empresa) => {
    return fetch(`${url}/signUp?uid=${uid}&name=${name}&email=${email}&password=${password}&empresa=${empresa}`,modeF)
        .then(res => {
            return res
        })
        .catch(err => {
            console.log(err)
            return false
        })
}

/**
 * Funcion para verificar si esta en la base de datos del firestore
 * @param uid id del usuario con cuenta de terceros 
 */
export const signinSocialBakend = (uid) => {
    return fetch(`${url}/confirmLoginThirdParty?uid=${uid}`, modeF)
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
    return fetch(`${url}/confirmLogin?email=${email}&password=${password}`, modeF)
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