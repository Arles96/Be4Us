import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Principal from './BigComponent/Principal'
import Login from './BigComponent/Login/Login'
import Error_404 from './BigComponent/404'

export default () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Principal} />
            <Route path="/login" exact component={Login} />
            <Route path="/" exact component={Error_404} />
        </Switch>
    </BrowserRouter>
)