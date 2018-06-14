import React from 'react'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import './Pricing.css'

export default ()=> (
    <div className="pricing-container" >
        <Grid container spacing={24} >
            <Grid item sm={4} >
                <Card className="card-pricing" >
                    <CardContent>
                        <h2>Free</h2>
                        <p>Un simple y poderosa herramienta para poder administrar tus tareas</p>
                        <Button>Sign up</Button>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sm={4} >
                <Card className="card-pricing" >
                    <CardContent>
                        <h2>Business Class</h2>
                        <p>Herramientas especializadas para el trabajo en equipo y aplicacion de la metología SCRUM </p>
                        <p>$4.99</p>
                        <Button>Adquirir</Button>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </div>
)