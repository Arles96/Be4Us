import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAEafqSyA6sqVuUAfsOMO36yQFbZM-duhE",
    authDomain: "b4us-e9e2a.firebaseapp.com",
    databaseURL: "https://b4us-e9e2a.firebaseio.com",
    projectId: "b4us-e9e2a",
    storageBucket: "b4us-e9e2a.appspot.com",
    messagingSenderId: "229628115831"
};

firebase.initializeApp(config)

//Referencia de la raiz de la base de datos
export const database = firebase.database
//Exportando el auth para la autenticacion
export const auth = firebase.auth
//Exportando el storage para guardar imagenes
export const storage = firebase.storage
//Exportando la url de las cloud functions
export const url  = "http://localhost:5000/b4us-e9e2a/us-central1"
//modo de configuracion del fetch
export const modeF = {
    mode: 'no-cors'
}


