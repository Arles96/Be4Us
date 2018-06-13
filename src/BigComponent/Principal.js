import React, {Component} from 'react'
import Navbar from '../components/Navbar/Navbar'
import GetStarted from '../components/GetStarted/GetStarted'

export default class Principal extends Component {

    constructor(){
        super()
    }

    render(){
        return (
            <div>
                <Navbar />
                <GetStarted />
            </div>
        )
    }

}