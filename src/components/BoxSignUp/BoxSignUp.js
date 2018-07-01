import React, {Component} from 'react'
import './BoxSignUp.css'
import {InputLabel, FormControl, Input} from '@material-ui/core'

export default class BoxSignUp extends Component {

    render(){
        return (
            <div className="row box-signup">
                <div className="col-sm-6" >
                    <h2>Registrate Ahora!</h2>
                    <hr className="line-signup" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem repellendus quasi fuga nesciunt 
                        dolorum nulla magnam veniam sapiente, fugiat! Commodi sequi non animi ea dolor molestiae, 
                        quisquam iste, maiores. Nulla.
                    </p>
                </div> 
                <div className="col-sm-6 form-signup" >
                    <h3 className="text-center m-4" >Registro</h3>
                    <hr className="line-signup" />
                    <form>
                        <FormControl className="formControl-signup m-1" >
                            <InputLabel>Nombre completo</InputLabel>
                            <Input className="input-signup" />
                        </FormControl>
                        <FormControl className="formControl-signup m-1" >
                            <InputLabel>Compañia o universidad</InputLabel>
                            <Input className="input-signup" />
                        </FormControl>
                        <FormControl className="formControl-signup m-1" >
                            <InputLabel>Correo</InputLabel>
                            <Input className="input-signup" />
                        </FormControl>
                        <FormControl className="formControl-signup m-1" >
                            <InputLabel>Contraseña</InputLabel>
                            <Input className="input-signup" />
                        </FormControl>
                        <div className="text-center mt-5 mb-4" >
                            <button className="btn btn-outline-light" >Comenzar</button>
                        </div>
                        <hr className="line-signup" />
                        <div className="section-social mb-3" >
                            <div className="social-signup" >
                                <i className="fab fa-facebook-square"></i>
                            </div>
                            <div className="social-signup"><i className="fab fa-google-plus-g"></i></div>
                            <div className="social-signup"><i className="fab fa-twitter"></i></div>
                        </div> 
                    </form>
                </div>
            </div>
        )
    }

}