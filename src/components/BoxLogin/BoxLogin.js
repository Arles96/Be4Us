import React, {Component} from 'react'
import { Grid, Button, TextField } from '@material-ui/core'
import './BoxLogin.css'

export default class BoxLogin extends Component {

    

    render(){
        return (
            <div className="box-login" >
                <h2 className="box-title mt-4" >Login</h2>
                <div className="box-social mt-4" >
                    <Grid container spacing={0} >
                        <Grid item xs={4} >
                            <Button className="button-social" variant="fab" color="primary" >
                                <i className="fab fa-facebook"></i>
                            </Button>
                        </Grid>
                        <Grid item xs={4} >
                            <Button className="button-social google" variant="fab" color="secondary" >
                                <i className="fab fa-google-plus-g"></i>
                            </Button>
                        </Grid>
                        <Grid item xs={4} >
                            <Button className="button-social twitter" variant="fab" color="primary" >
                                <i className="fab fa-twitter-square"></i>
                            </Button>
                        </Grid>
                    </Grid>
                </div>
                <form className="mt-3" >
                    <div>
                        <TextField
                            label="Email"
                            placeholder="Ingrese correo"
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