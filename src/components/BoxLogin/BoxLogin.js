import React, {Component} from 'react'
import { Grid, Button, TextField } from '@material-ui/core'
import './BoxLogin.css'
import {auth} from '../../data/firebase'

export default class BoxLogin extends Component {

    constructor(props){
        super(props)
        this.handleAuthGoogle = this.handleAuthGoogle.bind(this)
        this.handleAuthFacebook = this.handleAuthFacebook.bind(this)
        this.handleAuthTwitter = this.handleAuthTwitter.bind(this)
    }

    handleAuthTwitter(){
        auth().signInWithPopup(new auth.TwitterAuthProvider())
            .then(res => {
                console.log(res)
            })
            .catch(err =>  console.log(err))
    }

    handleAuthFacebook(){
        auth().signInWithPopup(new auth.FacebookAuthProvider())
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    handleAuthGoogle(){
        auth().signInWithPopup(new auth.GoogleAuthProvider())
            .then(res => {
                console.log(res)
            })
            .catch(err => console.log(err))
    }

    render(){
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
                <form className="mt-3" >
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
                    <button className="btn btn-outline-light mt-5" >
                        Empezar
                    </button>
                </form>
            </div>
        )
    }

}