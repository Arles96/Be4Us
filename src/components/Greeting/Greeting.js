import React, { Component } from 'react'
import './Greeting.css';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export default () => (
    <div className="greeting" >
        <div className="contain-greet" >

            <Grid className="Logo_Grid" wrap="nowrap"  container spacing={24}>

                <Grid className="Be_Us_Grid" container justify="flex-end" item xs>

                    <Grid item xs={false} container alignItems="flex-end" justify="flex-end">
                        <p className="Logo_Be" >Be</p>
                    </Grid>
                    
                    <Grid item xs={false} container alignItems="flex-start" justify="flex-end">
                        <p className="Logo_Us" >Us</p>
                    </Grid>
                    
                </Grid>

                <Grid item xs container alignItems="center">
                    <p className="Logo_4" >4</p>
                </Grid>
            </Grid>
        </div>
    </div>
)