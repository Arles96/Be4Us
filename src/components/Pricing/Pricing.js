import React from 'react'
import './Pricing.css'
import { Card, CardContent} from '@material-ui/core'

export default ()=> (
    <div className="pricing-container" >
        <h2 className="text-center m-5" >Precios</h2>
        <div className="row" >
            <div className="col-sm-6 text-center mb-4" >
                <Card className="card-pricing" >
                    <div className="cardHeader-pricing" >
                        <h3 className="titleCard-pricing" >Basico</h3>
                    </div>
                    <CardContent className="cardContent-pricing" >
                        <div className="m-3 options-pricing" >
                            <p>Puedes generar grupos</p>
                        </div>
                        <div className="m-3 options-pricing" >
                            <p>Chatea con tus colaboradores</p>
                        </div>
                        <div className="m-3 options-pricing" >
                            <p>Crea cualquier cantidad de tareas</p>
                        </div>
                        <div className="m-3 options-pricing" >
                            <p>Puedes importar imagenes para fondo de tu proyecto</p>
                        </div>
                        <div className="pricing" >
                            <h4>FREE</h4>
                        </div>
                        <div className="begin-princig" >
                            <button className="btn btn-secondary" >Comenzar</button>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="col-sm-6 text-center mb-4">
                <Card className="card-pricing" >
                    <div className="cardHeader-pricing" >
                        <h3 className="titleCard-pricing" >Premium</h3>
                    </div>
                    <CardContent className="cardContent-pricing" >
                        <div className="m-3 options-pricing" >
                            <p>Puedes generar grupos</p>
                        </div>
                        <div className="m-3 options-pricing" >
                            <p>Chatea con tus colaboradores</p>
                        </div>
                        <div className="m-3 options-pricing" >
                            <p>Crea cualquier cantidad de tareas</p>
                        </div>
                        <div className="m-3 options-pricing" >
                            <p>Importa imagenes para fondo de tus proyectos</p>
                        </div>
                        <div className="m-3 options-pricing" >
                            <p>Realiza videollamadas con tus colaboradores</p>
                        </div>
                        <div className="pricing" >
                            <h4>FREE</h4>
                        </div>
                        <div className="begin-princig" >
                            <button className="btn btn-secondary" >Comenzar</button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
        
    </div>
)