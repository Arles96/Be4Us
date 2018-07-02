import React, { Component } from 'react'
import { Grid, Button, TextField } from '@material-ui/core'
import './BoxLogin.css'
import { auth } from '../../data/firebase'
import { signupSocialBackend } from '../../data/user'

export default class BoxLogin extends Component {

    constructor(props) {
        super(props)
        this.handleAuthGoogle = this.handleAuthGoogle.bind(this)
        this.handleAuthFacebook = this.handleAuthFacebook.bind(this)
        this.handleAuthTwitter = this.handleAuthTwitter.bind(this)
        this.handleAuthEmail = this.handleAuthEmail.bind(this)
    }

    handleAuthEmail(e) {
        e.preventDefault()
        let email = e.target.email.value
        let password = e.target.password.value
        auth().signInWithEmailAndPassword(email, password)
            .then(res => {
                if (res.user) {
                    window.location = '/desk'
                } else {
                    alert("Erro correo o contraseña incorrecta")
                }
            })
            .catch(err => {
                console.log(err)
            })
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

    render() {
        return (
            <div className="box-login" >
                <h2 className="box-title mt-4" >Login</h2>
                <div className="box-social mt-4" >
                    <Grid container spacing={0} >
                        <Grid item xs={4} >
                            <Button className="button-social" variant="fab" color="primary" onClick={this.handleAuthFacebook} >
                                <i className="fab fa-facebook"></i>
                            </Button>
                        </Grid>
                        <Grid item xs={4} >
                            <Button className="button-social google" variant="fab" color="secondary" onClick={this.handleAuthGoogle} >
                                <i className="fab fa-google-plus-g"></i>
                            </Button>
                        </Grid>
                        <Grid item xs={4} >
                            <Button className="button-social twitter" variant="fab" color="primary" onClick={this.handleAuthTwitter} >
                                <i className="fab fa-twitter-square"></i>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <form className="mt-3" onSubmit={this.handleAuthEmail} >
                    <div>
                        <TextField
                            label="Email"
                            name="email"
                            className="mt-2 input-login"
                            type="email"
                        />
                    </div>
                    <div>
                        <TextField
                            label="Password"
                            name="password"
                            className="mt-2 input-login"
                            type="password"
                        />
                    </div>
                    <a href="./Signup" className="btn mt-5 toSignup" >
                        No tengo una cuenta
                    </a>
                    <button type="submit" className="btn btn-outline-light mt-5" >
                        Empezar
                    </button>
                </form>
            </div>
        )
    }

}