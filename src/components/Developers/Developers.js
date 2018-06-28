
import React from 'react';
import { Card, CardContent } from '@material-ui/core';
import './Developers.css';
import developer from '../../img/developer.svg';

export default () => (
    <div id="developersContainer">
        <h2 className="text-center m-5" >Desarrolladores</h2>
        <div className="row" >
        <div className="col-sm-4" >
            <Card className="card-developer mt-3 mb-3">
                <div className="text-center" >
                    <img className="card-img-top img-developer" src={developer} alt="Desarrollador" />
                </div>
                <CardContent>
                    <h4>Arles Cerrato</h4>
                    <h6 className="job-title" >Desarrollador Web</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit non dictumst tempor, 
                        habitasse litora augue in porta mattis taciti montes et aptent nunc.
                    </p>
                </CardContent>
            </Card>
        </div>
        <div className="col-sm-4" >
        <Card className="card-developer mt-3 mb-3">
                <div className="text-center" >
                    <img className="card-img-top img-developer" src={developer} alt="Desarrollador" />
                </div>
                <CardContent>
                    <h4>Cristhian Alvarez</h4>
                    <h6 className="job-title" >Desarrollador Web</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit non dictumst tempor, 
                        habitasse litora augue in porta mattis taciti montes et aptent nunc.
                    </p>
                </CardContent>
            </Card>
        </div>
        <div className="col-sm-4" >
        <Card className="card-developer mt-3 mb-3">
                <div className="text-center" >
                    <img className="card-img-top img-developer" src={developer} alt="Desarrollador" />
                </div>
                <CardContent>
                    <h4>Dario Mendoza</h4>
                    <h6 className="job-title" >Desarrollador Web</h6>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit non dictumst tempor, 
                        habitasse litora augue in porta mattis taciti montes et aptent nunc.
                    </p>
                </CardContent>
            </Card>
        </div>
        </div>
    </div>
  );
