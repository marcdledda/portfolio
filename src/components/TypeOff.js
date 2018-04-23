import React, { Component } from 'react';
import typeOffBanner from '../media/typeOffIMG.png';
import './typeOff.css'

class TypeOff extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img className="img-fluid typeOffImg" src={typeOffBanner} alt="TypeOff game banner"/>
                    </div>
                    <div className="col-12 align-self-center"><h2 className="typeOffTitle">TypeOff</h2></div>
                    <div className="col-12 typeOffDesc"><h4>A web game that uses typing as its main mechanic.</h4></div>
                    <div className="col-12 readBtn">
                        <button className="btn btn-info"><h6 className="moo">Read More</h6></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default TypeOff;