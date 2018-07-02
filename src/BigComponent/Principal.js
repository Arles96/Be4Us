import React, { Component } from 'react'
import AboutUs from '../components/AboutUS/AboutUs'
import Blog from '../components/Blog/Blog'
import Navbar from '../components/Navbar/Navbar'
import GetStarted from '../components/GetStarted/GetStarted'
import Greeting from '../components/Greeting/Greeting'
import Pricing from '../components/Pricing/Pricing'
import Developers from '../components/Developers/Developers'
import Footer from '../components/Footer/Footer'

export default class Principal extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0,
        }
    }

    render() {
        return (
            <div>
                <Navbar />
                <Greeting />
                <AboutUs />
                <GetStarted />
                <Blog />
                <Developers/>
                <Pricing />
                <Footer />
            </div>
        )
    }

}