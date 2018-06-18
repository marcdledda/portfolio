import React, { Component } from 'react';
import tgEX from '../media/testingGrounds/tgEX.png';
import tgPersona from '../media/testingGrounds/tgPersona.png';
import Footer from './Footer';

class TGroundsMain extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row px-lg-5">
                        <div className="col-lg-5 pl-lg-5 pr-lg-4 centerItem">
                            <h2>What is Testing Grounds?</h2>
                            <p>
                                Testing Grounds is a virtual application that aims to introduce the user to virtual reality. The application aims to give the user a fun and engaging experience through a series of tests.
                            </p>
                            <a className="btn btn-secondary" href={tgEX} download="Testing Grounds">Download Game</a>
                            <h4 className="mt-3">Role(s)</h4>
                            <h6>UI/UX Designer</h6>
                            <h6>Developer</h6>
                        </div>
                        <div className="col-lg">
                            <img className="img-fluid pl-lg-4 pr-lg-5" src={tgEX} alt="Testing Grounds Example Screen"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>The Challenge</h2>
                            <p>To persuade the user of the potential enjoyment they will get from buying a Virtual Reality Headset.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>User Research</h2>
                            <p>After conducting interviews with potential users, I discovered the following key points:</p>
                        </div>
                    </div>                                    

                    <div className="row">
                        <div className="col-lg-6 pb-lg-4">
                            <h4>1. Expensive</h4>
                            <p>The most common obstacle from getting a Virtual Reality Headset is the price.</p>
                        </div>
                        <div className="col-lg-6 pb-lg-4">
                            <h4>2. A Guide</h4>
                            <p>If possible, it would be nice to have someone guide them through their first time using a VR headset.</p>
                        </div>
                    </div>

                    <div className="col-12 text-center px-lg-5 pt-lg-4 mx-auto mt-5">
                        <h2>Target Audience</h2>
                    </div>

                    <div className="row px-lg-5 py-lg-4 centerItem centerImg">
                            <img className="img-fluid personaImg" src={tgPersona} alt="Testing Grounds Persona"/>
                        <div className="col-lg">
                            <h4>Meet Katy</h4>
                            <p>
                                Katy casually plays video games in her spare time, typically playing around 2 hours on the weekend. She has heard of Virtual Reality headsets, but does not want if for two reasons: she thinks they are too expensive and that they are just a gimmick.
                            </p>
                            <p className="personaQuote font-italic">
                                "I want to try Virtual Reality before I consider buying one."
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 text-center px-lg-5 pt-lg-4 mx-auto mt-5">
                            <h2>Reflections</h2>
                        </div>

                        <div className="col-lg-5">
                            <p><span className="font-weight-bold">Organize Scripts in Folders.</span> This being my first Unity based project, I underestimated the amount of scripts I was going to use; organizing them in folders would be beneficial.</p>
                            <p><span className="font-weight-bold">Plan out Script interactions.</span> A large part of my scripts are IF statements attached to booleans. Being able to map it out on a seperate file would help me map out interactions.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>Github</h2>
                            <p>Look at the code <a href="https://github.com/marcdledda/TG_game" target="_blank" rel="noopener noreferrer">here!</a></p>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default TGroundsMain;