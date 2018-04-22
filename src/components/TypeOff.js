import React, { Component } from 'react';
import typeOffBanner from '../media/three.png';
import './typeOff.css'

class TypeOff extends Component {
    render(){
        return (
            <div className="container">
                <div className="row">
                    {/* <div className="col align-self-center">
                        <img className="img-fluid typeImg" src={typeOffBanner} alt="TypeOff game banner"/>
                    </div> */}
                    <div className="col-xs containImg">
                        <img className="img-fluid" src={typeOffBanner} alt="TypeOff game banner"/>
                    </div>
                    <div className="col">
                        <div className="row text-center headType">TypeOff</div>
                        <div className="row text-center">An interactive app that uses typing as its main mechanic.</div>
                        <button className="btn btn-info row justify-content-center">Read More</button>
                    </div>

                    {/* <div className="col-4 lol">
                        TEST
                    </div>
                    <div className="col-4 lol">
                        TEST2
                    </div>
                    <div className="col-4 lol">
                        TEST3
                    </div> */}

                </div>
            </div>
        )
    }
}

export default TypeOff;