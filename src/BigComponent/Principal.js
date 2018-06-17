import React, { Component } from 'react'
import AboutUs from '../components/AboutUS/AboutUs'
import Blog from '../components/Blog/Blog'
import Navbar from '../components/Navbar/Navbar'
import GetStarted from '../components/GetStarted/GetStarted'
import Greeting from '../components/Greeting/Greeting'
import Pricing from '../components/Pricing/Pricing'
import Developers from '../components/Developers/Developers'

export default class Principal extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.handleScroll = this.handleScroll.bind(this)
    }

    handleContent(){
        if (this.state.counter===0){
            return <div className="animated fadeInUp star" ><Greeting /></div>
        }
        else if (this.state.counter===1){
            return <div className="animated fadeInUp star" ><GetStarted /></div>
        }
        else if (this.state.counter===2){
            return <div className="animated fadeInUp star" ><Developers /></div>
        }
        else if (this.state.counter===3){
            return <div className="animated fadeInUp star" ><Blog /></div>
        }
        else if (this.state.counter===4){
            return <div className="animated fadeInUp star" ><AboutUs /></div>
        }
        else {
            return <div className="animated fadeInUp star" ><Pricing /></div>
        }
    }

    handleScroll(e){
        if (Math.sign(e.deltaY)===-1){
            if (this.state.counter>0){
                this.setState({
                    counter : this.state.counter - 1
                })
            }
        }else {
            if (this.state.counter<5){
                this.setState({
                    counter : this.state.counter + 1
                })
            }
        }
        console.log(this.state.counter)
    }


    render() {
        return (
            <div onWheel={this.handleScroll} >
                <Navbar />
                {this.handleContent()}
            </div>
        )
    }

}