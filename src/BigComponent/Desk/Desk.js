import React, { Component } from 'react'
import Header from '../../components/DeskComponents/Header/Header'

export default class Desk extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <Header/>

            </div>
        )
    }

}