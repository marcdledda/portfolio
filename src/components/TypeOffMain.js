import React, { Component } from 'react';
import typeOff3Mon from '../media/3MonEx.png';
import sketches from '../media/sketches.png';
import Footer from './Footer';

class TypeOffMain extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row"><h4>What is TypeOff?</h4></div>
                            <div className="row">
                                <p>
                                    TypeOff is a browser game that uses typing as its main mechanic. The game focuses on how fast the user can type and comparing their scores to other
                                    users. 
                                </p>
                            </div>
                            <div className="row">
                                <a className="btn btn-secondary" href="http://marcdledda.github.io/TypeOff/" target="_blank" rel="noopener noreferrer">Play Game</a>
                            </div>
                            <div className="row"><h4>Role(s)</h4></div>
                            <div className="row"><h6>UX Design</h6></div>
                            <div className="row"><h6>Developer</h6></div>
                        </div>
                        <div className="col">
                            <img className="img-fluid" src={typeOff3Mon} alt="TypeOff Level 3 Monster"/>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col">
                            <div className="row"><h2>The Challenge</h2></div>
                            <div className="row"><p>To create a typing game that entertains the user, unlike other typing games that aims to teach the user.</p></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="row"><h2>The User</h2></div>
                            <div className="row"><p>Before the design process, I interviewed individuals who had some sort of gaming experience. Through my interview, I found that most people found typing games to be boring; with that in mind, I aimed to create a more visually appealing and interactive game.</p></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                                <div className="row"><h2>The Sketches</h2></div>
                                <div className="row">
                                    <img className="img-fluid" src={sketches} alt="Sketches"/>
                                </div>
                                <div className="row"><p>I decided to place all interactions within the HTML canvas, rather than having a menu interface outside the canvas. Initially, I had thought of making the canvas vertical to accomodate mobile users, but decided against it since the user will most likely use this in their computer instead.</p></div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <div className="row"><h2>The Final Design</h2></div>
                            {/* <div></div> */}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default TypeOffMain;