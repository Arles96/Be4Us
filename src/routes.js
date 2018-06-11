import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Principal from './BigComponent/Principal'

export default () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Principal} />
        </Switch>
    </BrowserRouter>
)