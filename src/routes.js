import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Principal from './BigComponent/Principal'
import Login from './BigComponent/Login/Login'

export default () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Principal} />
            <Route path="/login" exact component={Login} />
        </Switch>
    </BrowserRouter>
)