import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Principal from './BigComponent/Principal'
import Desk from './BigComponent/Desk/Desk'
import Login from './BigComponent/Login/Login'
import Error_404 from './BigComponent/404/404'
import SignUp from './BigComponent/SignUp/SignUp'

export default () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/index.html" exact component={Principal} />
            <Route path="/" exact component={Principal} />
            <Route path="/Desk/" exact component={Desk} />
            <Route path="/login" exact component={Login} />
            <Route path="/SignUp" exact component={SignUp} />
            <Route path="*" exact component={Error_404} />
        </Switch>
    </BrowserRouter>
)