import React, {Component} from 'react'
import AboutUs from '../components/AboutUS/AboutUs'
import Blog from '../components/Blog/Blog'
import Navbar from '../components/Navbar/Navbar'
import GetStarted from '../components/GetStarted/GetStarted'
import Greeting from '../components/Greeting/Greeting'
import Pricing from '../components/Pricing/Pricing'
import Developers from '../components/Developers/Developers'

export default class Principal extends Component {

    constructor(){
        super()
        this.state = {
            counter : 0
        }
    }

    handleContent(){
        if (this.state.counter===0){
            return (
                <Greeting />
            )
        }
    }


    render(){
        return (
            <div>
                <Navbar />
                <Greeting />
                <GetStarted />
                <Developers/>
                <Blog/>
                <AboutUs />
                <Pricing />
            </div>
        )
    }

}