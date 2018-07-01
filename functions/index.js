const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

//const fireStore = require("firebase/firestore");
const dbS = admin.firestore();

exports.confirmLoginThirdParty = functions.https.onRequest((req, res) => {
    /*agregar al final de la url ?uid=<uid>&email=<email>&password=<password>*/
    const uid = req.query.uid;

    var response = false;

    var user = dbS.collection("Users").doc(uid);

    user.get().then(function(doc) {
        if (doc.exists) {
            console.log("Login sucessful");
            response = true;
        } else {
            console.log("Usuario no existe.");
            response = false;
        }
    }).then(function(docRef) {
        res.send(response);
    })
    .catch(function(error) {
        console.log("Error getting document:", error);
        response = false;
    });

    //res.send(response);
});

exports.confirmLogin = functions.https.onRequest((req, res) => {
    /*agregar al final de la url ?uid=<uid>&email=<email>&password=<password>*/
    const email = req.query.email;
    const password = req.query.password;

    var response = false;

    var user = dbS.collection("Users").doc(email);

    user.get().then(function(doc) {
        if (doc.exists) {
            console.log(doc.data().password, password)
            if(doc.data().password == password){
                console.log("Login sucessful");
                response = true;
            }
        } else {
            console.log("Usuario no existe.");
            response = false;
        }
    }).then(function(user) {
        res.send(response);
    })
    .catch(function(error) {
        console.log("Error getting document:", error);
        res.send(false)
    });

    //res.send(response);
});

exports.signUpThirdParty = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const empresa = req.query.empresa;

    const data = {
        empresa: empresa
    }

    var response = false;

    var user = dbS.collection("Users").doc(uid);

    user.get().then(function(doc) {
        if (doc.exists) {
            console.log("Usuario ya existe.");
        } else {
            response = true;
            dbS.collection("Users").doc(uid).set(data);
        }
    })
    .then(function(user) {
        res.send(response);
    })
    .catch(function(error) {
        console.log("Error getting document:", error);
        res.send(false)
    });
});

exports.signUp = functions.https.onRequest((req, res) => {
    const email = req.query.email;
    const password = req.query.password;
    const empresa = req.query.empresa;

    var response = false;

    const data = {
        password: password,
        empresa: empresa
    }

    var user = dbS.collection("Users").doc(email);

    user.get().then(function(doc) {
        if (doc.exists) {
            console.log("Usuario ya existe.");
        } else {
            response = true;
            dbS.collection("Users").doc(email).set(data);
        }
    })
    .then(function(user) {
        res.send(response);
    })
    .catch(function(error) {
        console.log("Error getting document:", error);
        res.send(false)
    });
});

/*#########################################################################
                                Proyectos
##########################################################################*/

exports.addProyect = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const title = req.query.title;
    const content = req.query.content;
    const date = (new Date()).getUTCDate();

    var user = (uid != 0) ? uid : email;

    var response = false;

    const data = {
        owner: user,
        title: title,
        content: content,
        date: date
    }

    //Agregado a realtime db
    var newKey = admin.database().ref('/proyects/').push().key;

    admin.database().ref('/proyects/' + newKey).set(data);
    
    //Agregado a lista de proyectos del usuario
    dbS.collection("Users").doc(user).collection("ProyList").doc(title).set({key: newKey});

    res.send(true);
});

exports.updateProyect = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const proyId = req.query.proyId;
    const title = req.query.title;
    const content = req.query.content;
    const date = (new Date()).getUTCDate();

    var user = (uid != 0) ? uid : email;

    var response = false;

    const data = {
        owner: user,
        title: title,
        content: content,
        date: date
    }

    //Agregado a realtime db
    admin.database().ref('/proyects/' + proyId).set(data);
    
    //Agregado a lista de proyectos del usuario
    //dbS.collection("Users").doc(user).collection("ProyList").doc(title).set({key: newKey});

    res.send(true);
});