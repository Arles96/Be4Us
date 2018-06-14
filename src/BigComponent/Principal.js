import React, {Component} from 'react'
import AboutUs from '../components/AboutUS/AboutUs'
import Blog from '../components/Blog/Blog'
import Navbar from '../components/Navbar/Navbar'
import GetStarted from '../components/GetStarted/GetStarted'
import Greeting from '../components/Greeting/Greeting'

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
                <GetStarted />
                <Blog/>
            </div>
        )
    }

}