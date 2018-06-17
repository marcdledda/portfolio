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
                                Parker plays video games often, as they are his main source of entertainment. Typically, he plays around 1-3 hours a day, if time permits. He is attracted towards the competitive aspect of a game, constantly looking to improve his score.
                            </p>
                            <p className="personaQuote font-italic">
                                "I want to try Virtual Reality before I consider buying one."
                            </p>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        );
    }
}

export default TGroundsMain;