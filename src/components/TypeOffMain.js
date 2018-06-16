import React, { Component } from 'react';
import typeOffEX from '../media/typeOff/typeOffEX.png';
import typeOffPersona from '../media/typeOff/typeOffPersona.png';
import sketches from '../media/typeOff/sketches.png';
import sketchSpecific from '../media/typeOff/sketchSpecific.png';
import mainMenu from '../media/typeOff/mainMenu.png';
import tutorialGame from '../media/typeOff/tutorialGame.png';
import myScores from '../media/typeOff/myScores.png';
import leaderboards from '../media/typeOff/leaderboards.png';
import following from '../media/typeOff/following.png';
import Footer from './Footer';
import './typeOffMain.css';

class TypeOffMain extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row px-lg-5">
                        <div className="col-lg-5 pl-lg-5 pr-lg-4 centerItem">
                            <h2>What is TypeOff?</h2>
                            <p>
                                TypeOff is a browser game that uses typing as its main mechanic. The game focuses on how fast the user can type and comparing their scores to other users.
                            </p>
                            <a className="btn btn-secondary" href="http://marcdledda.github.io/TypeOff/">Play Game</a>
                            <h4 className="mt-3">Role(s)</h4>
                            <h6>UI/UX Designer</h6>
                            <h6>Front-end Developer</h6>
                        </div>
                        <div className="col-lg">
                            <img className="img-fluid pl-lg-4 pr-lg-5" src={typeOffEX} alt="TypeOff Example Screen"/>
                        </div>
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
                        <div className="col-lg-4 pb-lg-4">
                            <h4>1. Boring</h4>
                            <p>Many played similar games because they were in a typing class and found it to be very boring and tedious.</p>
                        </div>
                        <div className="col-lg-4 pb-lg-4">
                            <h4>2. Personal Score</h4>
                            <p>To the majority, the personal score is more important than the global score, but having both is still wanted.</p>
                        </div>
                        <div className="col-lg-4 pb-lg-4">
                            <h4>3. Preferred Device</h4>
                            <p>All of the users have never played, nor were they willing, to play a typing game on a phone or a tablet.</p>
                        </div>
                    </div>
                    
                    <div className="col-12 text-center px-lg-5 pt-lg-4 mx-auto mt-5">
                        <h2>Target Audience</h2>
                    </div>

                    <div className="row px-lg-5 py-lg-4 centerItem centerImg">
                            <img className="img-fluid personaImg" src={typeOffPersona} alt="TypeOff Persona"/>
                        <div className="col-lg">
                            <h4>Meet Parker</h4>
                            <p>
                                Parker plays video games often, as they are his main source of entertainment. Typically, he plays around 1-3 hours a day, if time permits. He is attracted towards the competitive aspect of a game, constantly looking to improve his score.
                            </p>
                            <p className="personaQuote font-italic">
                                "I want to play a fun game that also allows me to improve my skill."
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>Sketches</h2>
                            <img className="img-fluid" src={sketches} alt="Sketches of TypeOff"/>
                            <p className="px-lg-5 mb-lg-5">
                                I decided to place all interactions within the HTML canvas, rather than having a menu interface outside the canvas. Initially, I had thought of making the canvas vertical to accomodate mobile users, but decided against it because of the target audience's preferred device being a computer.
                            </p>
                            <img className="img-fluid mb-lg-3" src={sketchSpecific} alt="Specific sketches of typeoff"/>
                            <p className="px-lg-5">
                                Parker's score is stored in Google Firebase and then displayed in both the "Scores" page and the "Leaderboards"pages, allowing Parker to keep track of their progress. The "Friends List" page is a way for Parker to compare his score with other users.
                            </p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2 className="mb-lg-4">Final Design</h2>
                            <img className="img-fluid" src={mainMenu} alt="Main Menu"/>
                            <p className="font-italic pb-lg-5 mb-lg-5">
                                Main Menu
                            </p>
                            <img className="img-fluid" src={tutorialGame} alt="Main Menu"/>
                            <p className="font-italic mb-0">
                                Tutorial into the Main Game
                            </p>
                            <p className="font-italic pb-lg-5 mb-lg-5">
                                A tutorial page was added so that Parker is informed on how to play the game, as well as load the API in the background.
                            </p>
                            <div className="row">
                                <div className="col-4 text-center">
                                    <img className="img-fluid" src={myScores} alt="My Scores Page"/>
                                    <p className="font-italic">
                                        User Scores Page
                                    </p>
                                </div>
                                <div className="col-4 text-center">
                                    <img className="img-fluid" src={leaderboards} alt="Leaderboards Page"/>
                                    <p className="font-italic">
                                        Leaderboards
                                    </p>
                                </div>
                                <div className="col-4 text-center">
                                    <img className="img-fluid" src={following} alt="Following Page"/>
                                    <p className="font-italic">
                                        Following &#38; Followers
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>Github</h2>
                            <p>Look at the code <a href="https://github.com/marcdledda/TypeOff" target="_blank" rel="noopener noreferrer">here!</a></p>
                        </div>
                    </div>

                </div>
                <Footer />
            </div>
        )
    }
}

export default TypeOffMain;