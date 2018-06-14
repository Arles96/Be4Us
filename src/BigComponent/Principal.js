import React, {Component} from 'react'
import AboutUs from '../components/AboutUS/AboutUs'
import Blog from '../components/Blog/Blog'
import Navbar from '../components/Navbar/Navbar'
import GetStarted from '../components/GetStarted/GetStarted'
import Greeting from '../components/Greeting/Greeting';
import Developers from '../components/Developers/Developers';

export default class Principal extends Component {

    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <Navbar />
                <Greeting />
                <GetStarted />
                <Developers/>
                <Blog/>
            </div>
        )
    }

}