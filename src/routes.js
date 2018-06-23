import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Principal from './BigComponent/Principal'
import Error_404 from './BigComponent/404/404'

export default () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Principal} />
            <Route path="*" exact component={Error_404} />
        </Switch>
    </BrowserRouter>
)