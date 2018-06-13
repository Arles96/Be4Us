import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './index.css'
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

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
