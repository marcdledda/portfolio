import React, { Component } from 'react';
import typeOffEX from '../media/typeOffEX.png';
import typeOffPersona from '../media/typeOffPersona.png';
import sketches from '../media/sketches.png';
import Footer from './Footer';
import './typeOffMain.css';

class TypeOffMain extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row px-lg-5">
                        <div className="col pl-lg-5 pr-lg-4 centerItem">
                            <h2>What is TypeOff?</h2>
                            <p>
                                TypeOff is a browser game that uses typing as its main mechanic. The game focuses on how fast the user can type and comparing their scores to other users.
                            </p>
                            <a className="btn btn-secondary" href="http://marcdledda.github.io/TypeOff/">Play Game</a>
                            <h4 className="mt-3">Role(s)</h4>
                            <h6>UI/UX Design</h6>
                            <h6>Developer</h6>
                        </div>
                        <img className="img-fluid pl-lg-4 pr-lg-5" src={typeOffEX} alt="TypeOff Example Screen"/>
                    </div>

                    <div className="row">
                        <div className="col text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>The Challenge</h2>
                            <p>To create a typing game that entertains the user, unlike other typing games that aims to teach the user.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>User Research</h2>
                            <p>After conducting interviews with potential users, I discovered the following key points:</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-4">
                            <h4>1. Boring</h4>
                            <p>Many played similar games because they were in a typing class and found it to be very boring and tedious.</p>
                        </div>
                        <div className="col-lg-4">
                            <h4>2. Personal Score</h4>
                            <p>To the majority, the personal score is more important than the global score, but having both is still wanted.</p>
                        </div>
                        <div className="col-lg-4">
                            <h4>3. Preferred Device</h4>
                            <p>All of the users have never played, nor were they willing, to play a typing game on a phone or a tablet.</p>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>Target Market</h2>
                            <img className="img-fluid" src={typeOffPersona} alt="TypeOff Persona"/>
                            <h4>Parker Hyche</h4>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default TypeOffMain;