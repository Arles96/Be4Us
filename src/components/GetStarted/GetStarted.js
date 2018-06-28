import React from 'react'
import './GetStarted.css'
import Button from '@material-ui/core/Button'

export default () => (
    <div id="GetStarted_"className="get-started" >
        <div className="contain-started" >
            <h2 className="title-started" >Comenzar</h2>
            <p className="text-started" >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <div className="button-started" >
                <Button variant="contained" href="/signup" className="started" >
                    Registrarme
                </Button>
            </div>
        </div>
    </div>
)