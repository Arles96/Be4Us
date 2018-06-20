import firebase from 'firebase/app'

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
const database = firebase.database().ref()
//Exportando la raiz de tasks de la base de datos
export const tasks = database.child('/tasks')
//Exportando la raiz de proyects de la base de datos
export const proyects = database.child('/proyects')
//Exportando la raiz de chats de la base de datos
export const chats = database.child('/chats')
//Exportando el auth para la autenticacion
export const auth = firebase.auth()


