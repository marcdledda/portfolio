import React, { Component } from 'react';
import typeOffBanner from '../media/typeOffBanner.png';
import './typeOff.css'

class TypeOff extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    <img className="col img-fluid" src={typeOffBanner} alt="Type Off game banner"/>
                    <div className="col align-self-center">
                        <div className="row">TypeOff</div>
                        <div className="row">An interactive app that uses typing as its main mechanic.</div>
                        <button className="btn btn-info row">Explore</button>
                    </div>

                </div>
            </div>
        )
    }
}

export default TypeOff;