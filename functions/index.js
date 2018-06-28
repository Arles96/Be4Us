const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

//const fireStore = require("firebase/firestore");
const dbS = admin.fireStore();

exports.confirmLogin = functions.https.onRequest((req, res) => {
    /*agregar al final de la url ?uid=<uid>&email=<email>&password=<password>*/
    const uid = req.query.uid;
    const email = req.query.email;
    const password = req.query.password;

    var response = false;

    var user = dbS.collection("Users").doc(uid);

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
    }).then(function(docRef) {
        res.send(response);
    })
    .catch(function(error) {
        console.log("Error getting document:", error);
        response = false;
    });

    //res.send(response);
});

exports.signUp = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const password = req.query.password;
    const data = {
        email: email,
        password: password
    }

    dbS.collection("Users").doc(uid).set(data);

    res.send(true);
});