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
    const uid = req.query.uid;
    const email = req.query.email;
    const name = req.query.name;
    const password = req.query.password;
    const empresa = req.query.empresa;

    var response = false;

    const data = {
        email: email,
        password: password,
        name: name,
        empresa: empresa
    }

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

/*#########################################################################
                                Proyectos
##########################################################################*/

exports.addProyect = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const groupId = req.query.groupId;
    const email = req.query.email;
    const title = req.query.title;
    const content = req.query.content;
    const dueDate = req.query.dueDate;

    var d = new Date();
    const creationDate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()

    var user = (uid != 0) ? uid : email;

    const data = {
        owner: user,
        title: title,
        content: content,
        creationDate: creationDate,
        groupId: groupId,
        dueDate: dueDate
    }

    //Agregado a realtime db
    var newKey = admin.database().ref('/proyects/').push().key;

    admin.database().ref('/proyects/' + newKey).set(data);
    
    //Agregado a lista de proyectos del usuario
    dbS.collection("Users").doc(user).collection("ProyList").doc(newKey).set({groupId: groupId});

    const dataUp = {}
    dataUp['/groups/' + groupId + "/proyects/" + newKey] = data;
    admin.database().ref().update(dataUp);

    res.send(true);
});

exports.updateProyect = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const proyId = req.query.proyId;
    const groupId = req.query.groupId;
    const title = req.query.title;
    const content = req.query.content;
    const dueDate = req.query.dueDate;

    var d = new Date();
    const creationDate = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate()

    var user = (uid != 0) ? uid : email;

    const data = {
        owner: user,
        title: title,
        content: content,
        creationDate: creationDate,
        groupId: groupId,
        dueDate:dueDate
    }

    //Modificado en realtime db
    admin.database().ref('/groups/' + groupId + "/proyects/" + proyId).set(data);

    res.send(true);
});

exports.deleteProyect = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const proyId = req.query.proyId;
    const groupId = req.query.groupId;

    var user = (uid != 0) ? uid : email;

    //Borrando de realtime db y store
    admin.database().ref('/groups/' + groupId + '/proyects/' + proyId).remove();
    dbS.collection("Users").doc(user).collection("ProyList").doc(proyId).delete();

    res.send(true);
});

/*#################################################
                    Participantes
#################################################*/
exports.addParticipant = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const proyId = req.query.proyId;
    const groupId = req.query.groupId;

    var user = (uid != 0) ? uid : email;
    

    /*var newKey = admin.database().ref('/proyects/' + proyId + "/participants/").push().key;

    const data = {}
    data['/proyects/' + proyId + "/participants/" + newKey] = uid;*/

    const data = {}
    data['/groups/' + groupId +'/proyects/' + proyId + "/participants/" + user] = "uid";

    admin.database().ref().update(data);

    dbS.collection("Users").doc(user).collection("ProyList").doc(proyId).set({groupId: groupId});

    res.send(true);
});

exports.removeParticipant = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const proyId = req.query.proyId;
    const groupId = req.query.groupId;

    var user = (uid != 0) ? uid : email;

    admin.database().ref('/groups/' + groupId + '/proyects/' + proyId + "/participants/" + user).remove();
    dbS.collection("Users").doc(user).collection("ProyList").doc(proyId).remove();

    res.send(true);
});

/*#################################################
                    Tareas
#################################################*/

exports.addTodo = functions.https.onRequest((req, res) => {
    const proyId = req.query.proyId;
    const groupId = req.query.groupId;
    const title = req.query.title;
    const content = req.query.content;
    const dueDate = req.query.dueDate;

    //var user = (uid != 0) ? uid : email;

    const data = {
        title: title,
        content: content,
        proyId: proyId,
        dueDate: dueDate
    }

    //Agregado a realtime db
    var newKey = admin.database().ref('/groups/' + groupId + '/proyects/' + proyId + "/tasks/").push().key;

    admin.database().ref('/groups/' + groupId + '/proyects/' + proyId + '/tasks/' + newKey).set(data);

    res.send(true);
});

exports.removeTodo = functions.https.onRequest((req, res) => {
    const proyId = req.query.proyId;
    const taskId = req.query.taskId;
    const groupId = req.query.groupId;

    admin.database().ref('/groups/' + groupId + '/proyects/' + proyId + "/tasks/" + taskId).remove();

    dbS.collection("Users").doc(user).collection("TaskList").doc(newKey).remove();

    res.send(true);
});

exports.addParticipantTask = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const proyId = req.query.proyId;
    const taskId = req.query.taskId;
    const groupId = req.query.groupId;

    var user = (uid != 0) ? uid : email;

    const data = {}
    data['/groups/' + groupId + '/proyects/' + proyId + "/tasks/" + taskId + "/participants/" + user] = "uid";

    admin.database().ref().update(data);

    dbS.collection("Users").doc(user).collection("TaskList").doc(taskId).set({proyId:proyId});

    res.send(true);
});

exports.removeParticipantTask = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const proyId = req.query.proyId;
    const taskId = req.query.taskId;
    const groupId = req.query.groupId;

    var user = (uid != 0) ? uid : email;

    admin.database().ref('/groups/' + groupId + '/proyects/' + proyId + "/tasks/" + taskId + "/participants/" + user).remove();

    dbS.collection("Users").doc(user).collection("TaskList").doc(taskId).remove();

    res.send(true);
});

/*#################################################
                    Grupos
#################################################*/
exports.addGroup = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const title = req.query.title;
    const content = req.query.content;
    const dueDate = req.query.dueDate;

    var user = (uid != 0) ? uid : email;

    const data = {
        owner: user,
        title: title,
        content: content,
        dueDate: dueDate
    }

    //Agregado a realtime db
    var newKey = admin.database().ref('/groups/').push().key;

    admin.database().ref('/groups/' + newKey).set(data);

    dbS.collection("Users").doc(user).collection("GroupList").doc(newKey).set({empty: ""});

    res.send(true);
});

exports.deleteGroup = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const groupId = req.query.groupId;

    var user = (uid != 0) ? uid : email;
    //Agregado a realtime db
    admin.database().ref('/groups/' + groupId).remove();

    dbS.collection("Users").doc(user).collection("GroupList").doc(groupId).remove();

    res.send(true);
});

exports.addParticipantGroup = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const groupId = req.query.groupId;

    var user = (uid != 0) ? uid : email;

    const data = {}
    data['/groups/' + groupId + "/participants/" + user] = "uid";

    admin.database().ref().update(data);

    dbS.collection("Users").doc(user).collection("GroupList").doc(groupId).set({empty: ""});

    res.send(true);
});

exports.removeParticipantGroup = functions.https.onRequest((req, res) => {
    const uid = req.query.uid;
    const email = req.query.email;
    const groupId = req.query.groupId;

    var user = (uid != 0) ? uid : email;

    admin.database().ref('/groups/' + groupId + "/participants/" + user).remove();

    dbS.collection("Users").doc(user).collection("GroupList").doc(groupId).set({empty: ""});

    res.send(true);
});

/*#################################################
                    Imagenes
#################################################*/

exports.setImageGroup = functions.https.onRequest((req, res) => {
    const groupId = req.query.groupId;
    const imgUrl= req.query.imgUrl;
    const data = {}
    data['/groups/' + groupId + "/imageUrl/"] = imgUrl;

    admin.database().ref().update(data);

    res.send(true);
});

exports.setImageProyect = functions.https.onRequest((req, res) => {
    const proyId = req.query.proyId;
    const imgUrl= req.query.imgUrl;
    const groupId = req.query.groupId;
    const data = {}
    data['/groups/' + groupId + '/proyects/' + proyId + "/imageUrl/"] = imgUrl;

    admin.database().ref().update(data);

    res.send(true);
});

exports.setImageTask = functions.https.onRequest((req, res) => {
    const proyId = req.query.proyId;
    const taskId = req.query.taskId;
    const groupId = req.query.groupId;
    const imgUrl= req.query.imgUrl;
    const data = {}
    data['/groups/' + groupId + '/proyects/' + proyId + "/tasks/" + taskId + "/imageUrl/"] = imgUrl;

    admin.database().ref().update(data);

    res.send(true);
});