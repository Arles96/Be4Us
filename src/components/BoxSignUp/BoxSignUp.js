import React, {Component} from 'react'
import './BoxSignUp.css'
import {InputLabel, FormControl, Input} from '@material-ui/core'
import {signupBackend, signupSocialBackend} from '../../data/user'
import { auth } from '../../data/firebase'

export default class BoxSignUp extends Component {

    constructor(){
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleAuthFacebook = this.handleAuthFacebook.bind(this)
        this.handleAuthGoogle = this.handleAuthGoogle.bind(this)
        this.handleAuthTwitter = this.handleAuthTwitter.bind(this)
    }

    handleAuthTwitter() {
        auth().signInWithPopup(new auth.TwitterAuthProvider())
            .then(res => {
                let uid = res.user.uid
                signupSocialBackend(uid, 'null')
                window.location = '/desk'
            })
            .catch(err => console.log(err))
    }

    handleAuthFacebook() {
        auth().signInWithPopup(new auth.FacebookAuthProvider())
            .then(res => {
                let uid = res.user.uid
                signupSocialBackend(uid, 'null')
                window.location = '/desk'
            })
            .catch(err => console.log(err))
    }

    handleAuthGoogle() {
        auth().signInWithPopup(new auth.GoogleAuthProvider())
            .then(res => {
                let uid = res.user.uid
                signupSocialBackend(uid, 'null')
                window.location = '/desk'
            })
            .catch(err => console.log(err))
    }

    handleSubmit(e){
        e.preventDefault()
        let name = e.target.name.value
        let email = e.target.email.value
        let company = e.target.company.value
        let password = e.target.password.value
        auth().createUserWithEmailAndPassword(email, password)
            .then(response => {
                console.log(response)
                if (response.code) {
                    alert("El existe este usuario")
                }else {
                    let uid = response.user.uid
                    console.log(uid)
                    let data = signupBackend(uid, email, name, password, company)
                    Promise.resolve(data).then(res => {
                        if (res) {
                            alert("Se ha registrado con exito. Por favor inicie login en la siguiente pagina")
                            window.location = "/login"
                        }else {
                            console.log(res)
                        }
                    })
                }
            })
            .catch(err => {
                alert("Error al crear el usuario")
                console.log(err)
            })
        
    }

    render(){
        return (
            <div className="row box-signup">
                <div className="col-sm-6" >
                    <h2>¡Registrate Ahora!</h2>
                    <hr className="line-signup" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt 
                        dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, 
                        quisquam iste, maiores. Nulla.
                    </p>
                    <a href="/" className="mt-2 ref-home" >
                        Regresar a la pagina Principal ...
                    </a>
                </div> 
                <div className="col-sm-6 form-signup" >
                    <h3 className="text-center m-4" >Registro</h3>
                    <hr className="line-signup" />
                    <form onSubmit={this.handleSubmit}>
                        <FormControl className="formControl-signup m-1" >
                            <InputLabel>Nombre completo</InputLabel>
                            <Input className="input-signup" name="name" />
                        </FormControl>
                        <FormControl className="formControl-signup m-1" >
                            <InputLabel>Compañia o universidad</InputLabel>
                            <Input className="input-signup" name="company" />
                        </FormControl>
                        <FormControl className="formControl-signup m-1" >
                            <InputLabel>Correo</InputLabel>
                            <Input className="input-signup" name="email" type="email" />
                        </FormControl>
                        <FormControl className="formControl-signup m-1" >
                            <InputLabel>Contraseña</InputLabel>
                            <Input className="input-signup" name="password" type="password" />
                        </FormControl>
                        <div className="text-center mt-5 mb-4" >
                            <button className="btn btn-outline-light" >Comenzar</button>
                        </div>
                        <hr className="line-signup" />
                        <div className="section-social mb-3" >
                            <div className="social-signup" >
                                <i onClick={this.handleAuthFacebook} className="fab fa-facebook-square"></i>
                            </div>
                            <div className="social-signup">
                                <i onClick={this.handleAuthGoogle} className="fab fa-google-plus-g"></i>
                            </div>
                            <div className="social-signup">
                                <i onClick={this.handleAuthTwitter} className="fab fa-twitter"></i>
                            </div>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }

}