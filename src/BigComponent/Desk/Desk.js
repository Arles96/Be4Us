import React, { Component } from 'react'
import './Desk.css';
import Header from '../../components/DeskComponents/Header/Header'
import Path from '../../components/DeskComponents/Path/Path'
import Board from '../../components/DeskComponents/Board/Board'
//import BottomNavigation from '../../components/DeskComponents/BottomNavigation/BottomNavigation'

export default class Desk extends Component {

    constructor() {
        super()
        this.state = {
            currentLevel: 0,
            currentKey: 0,
            deep: false,
            path: []
        }
        this.ramKey = this.ramKey.bind(this);
        this.onGO = this.onGO.bind(this);
        this.onBACK = this.onBACK.bind(this);
        this.getDeep = this.getDeep.bind(this);
        this.getLevels = this.getLevels.bind(this);
    }

    ramKey() {
        let fecha = new Date();
        return "Y" + fecha.getFullYear() + "M" + (fecha.getMonth() + 1) + "D" + fecha.getDate() + "H" + fecha.getHours() + "Mi" + fecha.getMinutes() + "S" + fecha.getSeconds() + "m" + fecha.getMilliseconds() + "";
    }

    onBACK() {
        this.setState((element) => ({
            currentLevel: element.currentLevel - 1
        }));
        this.state.path.pop();
        if (this.state.path.length === 0) {
            this.setState((element) => ({
                deep: false
            }));
        }
    }

    onGO(currentKey) {
        this.setState((element) => ({
            currentKey: currentKey,
            deep: true
        }));
        this.state.path.push(currentKey);

    }

    getLevels() {
        let image1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBfR8vP9Jv6HsU7LTM7r8FY3dUkExO-OH2nARhfabPRWbM1etRGQ";
        let lastLevel = [
            { level: 2, title: "Task1", date: "##/##/20##", image: image1, description: "Description", key: 0, levels: null },
            { level: 2, title: "Task2", date: "##/##/20##", image: image1, description: "Description", key: 1, levels: null }
        ];

        let subLevels = [
            { level: 1, title: "Project1", date: "##/##/20##", image: image1, description: "Description", key: 0, levels: lastLevel },
            { level: 1, title: "Project2", date: "##/##/20##", image: image1, description: "Description", key: 1, levels: lastLevel }
        ];

        let levels = [
            { level: 0, title: "Body1", date: "##/##/20##", image: image1, description: "Description", key: 0, levels: subLevels },
            { level: 0, title: "Body2", date: "##/##/20##", image: image1, description: "Description", key: 1, levels: subLevels },
            { level: 0, title: "Body3", date: "##/##/20##", image: image1, description: "Description", key: 2, levels: subLevels },
            { level: 0, title: "Body4", date: "##/##/20##", image: image1, description: "Description", key: 3, levels: subLevels }
        ];
        return levels;
    }

    getDeep() {
        return this.state.deep;
    }

    render() {
        return (
            <div className="Desk">
                <Header isDeep={this.getDeep} onBACK={this.onBACK} />
                <Path levels={this.getLevels()} path={this.state.path} />
                <Board onGO={this.onGO} levels={this.getLevels()} path={this.state.path} />
            </div>
        )
    }

}