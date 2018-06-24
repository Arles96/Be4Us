import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Principal from './BigComponent/Principal'
import Blog from './BigComponent/Blog/Blog'

export default () =>(
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Principal} />
            <Route path="/blog" exact component={Blog} />
        </Switch>
    </BrowserRouter>
)