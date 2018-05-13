import React, { Component } from 'react';
import typeOff3Mon from '../media/3MonEx.png';
import sketches from '../media/sketches.png';
import Footer from './Footer';
import './typeOffMain.css';

class TypeOffMain extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col centerItem">
                            <h4>What is TypeOff?</h4>
                            <p>
                                TypeOff is a browser game that uses typing as its main mechanic. TypeOff focuses on how fast the user can type and comparing their scores to other users.
                            </p>
                            <a className="btn btn-secondary" href="http://marcdledda.github.io/TypeOff/">Play Game</a>
                            <h4 className="mt-3">Role(s)</h4>
                            <h6>UI/UX Design</h6>
                            <h6>Developer</h6>
                        </div>
                        <img className="img-fluid" src={typeOff3Mon} alt="TypeOff Level 3 Monster"/>
                    </div>

                    <div className="row">
                        <div className="col text-center p-lg-5 mx-auto my-5">
                            <h2>The Challenge</h2>
                            <p>To create a typing game that entertains the user, unlike other typing games that aims to teach the user.</p>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default TypeOffMain;