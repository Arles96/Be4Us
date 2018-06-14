import React, { Component } from 'react'
import Typography from '@material-ui/core/Typography';
import './Greeting.css';
import Button from '@material-ui/core/Button'

export default () => (
    <div className="greeting" >
        <div className="contain-greet" >
            <Typography className="Logo_4" variant="display4">
                4
            </Typography>
            <Typography className="Logo_Be" variant="display4">
                Be
            </Typography>
            <Typography className="Logo_Us" variant="display4">
                Us
            </Typography>
        </div>
    </div>
)