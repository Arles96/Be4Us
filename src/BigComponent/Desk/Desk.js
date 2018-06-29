import React, { Component } from 'react'
import './Desk.css';
import Header from '../../components/DeskComponents/Header/Header'
import Board from '../../components/DeskComponents/Board/Board'
import BottomNavigation from '../../components/DeskComponents/BottomNavigation/BottomNavigation'

export default class Desk extends Component {

    constructor() {
        super()
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div className="Desk">
                <Header/>
                <Board/>
            </div>
        )
    }

}