import React, { Component } from 'react';
import wyfyEX from '../media/wyfy/wyfyEX.png';
import wyfyPersona from '../media/wyfy/wyfyPersona.png';
import wyfySearch from '../media/wyfy/wyfyMain.png';
import wyfyLocation from '../media/wyfy/wyfyLocation.png';
import wyfyExtend from '../media/wyfy/wyfyExtend.png';
import wyfyDetails from '../media/wyfy/wyfyDetails.png';
import Footer from './Footer';

class WyFyMain extends Component {
    render(){
        return(
            <div>
                <div className="container">
                    <div className="row px-lg-5">
                        <div className="col-lg-5 pl-lg-5 pr-lg-4 centerItem">
                            <h2>What is WyFy?</h2>
                            <p>
                                WyFy is an app that provides the user with locations of free wi-fi hotspots based on either their location or by searching though keywords.
                            </p>
                            <h4 className="mt-3">Role(s)</h4>
                            <h6>Front-end Developer</h6>
                        </div>
                        <div className="col-lg">
                            <img className="img-fluid pl-lg-4 pr-lg-5" src={wyfyEX} alt="WyFy Example Screen"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>The Challenge</h2>
                            <p>To create an app that allows a user the ability to discover local wi-fi resources from Nashville’s Open Data Portal based on their current location.</p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-5 bottomBorder">
                            {/* BORDER LINE */}
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>Datasets</h2>
                            <p>The datasets below were used to provide information to enhance the app:</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 pb-lg-4">
                            <h4>1. Metro Public WiFi Locations</h4>
                            <p>The main dataset in which the app revolves around. This API provides the name, address and zip code; all of which is then used in the other datasets.</p>
                        </div>
                        <div className="col-lg-4 pb-lg-4">
                            <h4>2. Google Places Search, Details, &#38; Photos</h4>
                            <p>While it is seperated into three datasets, all three work as a unit to provide more details to the location, such as a photo and a phone number.</p>
                        </div>
                        <div className="col-lg-4 pb-lg-4">
                            <h4>3. Google Maps React</h4>
                            <p>This component is the map used to show the user where they are currently located and where are the free wifi hotspots located.</p>
                        </div>
                    </div>
                    
                    <div className="row justify-content-center">
                        <div className="col-5 bottomBorder">
                            {/* BORDER LINE */}
                        </div>
                    </div>

                    <div className="col-12 text-center px-lg-5 pt-lg-4 mx-auto mt-5">
                        <h2>Target Audience</h2>
                    </div>

                    <div className="row px-lg-5 py-lg-4 centerItem centerImg">
                            <img className="img-fluid personaImg" src={wyfyPersona} alt="WyFy Persona"/>
                        <div className="col-lg">
                            <h4>Meet Elliot</h4>
                            <p>
                                Elliot just moved to Nashville for his new developer job. He works remote and on location, and the only place to do work outside of the office is at home. He wants to find new places he can complete work so he isn't stuck at home.
                            </p>
                            <p className="personaQuote font-italic">
                                "I get a lot of calls about work while I'm out, it's great to know where free local wifi is to help my team."
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-5 bottomBorder">
                            {/* BORDER LINE */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2 className="mb-lg-4">Features</h2>
                            <h4>Search</h4>
                            <img className="img-fluid" src={wyfySearch} alt="Search"/>
                            <p className="font-italic pt-3 pb-lg-5 mb-lg-5">
                                Search using keywords
                            </p>
                            <h4>Geolocation</h4>
                            <img className="img-fluid" src={wyfyLocation} alt="Location"/>
                            <p className="font-italic pt-3 pb-lg-5 mb-lg-5">
                                Press the bottom navigation bar to find current location; it also shows how far the location is by miles
                            </p>
                            <h4>Extended List View</h4>
                            <img className="img-fluid" src={wyfyExtend} alt="Extends"/>
                            <p className="font-italic pt-3 pb-lg-5 mb-lg-5">
                                Press the arrow to extend the view location
                            </p>
                            <h4>Details View</h4>
                            <img className="img-fluid" src={wyfyDetails} alt="Details"/>
                            <p className="font-italic pt-3">
                                Pressing more will give the user more details about the location
                            </p>
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-5 bottomBorder">
                            {/* BORDER LINE */}
                        </div>
                    </div>

                    <div className="row justify-content-center">
                        <div className="col-12 text-center px-lg-5 pt-lg-4 mx-auto mt-5">
                            <h2>Reflections</h2>
                        </div>

                        <div className="col-lg-5">
                            <p><span className="font-weight-bold">Get to know the Google APIs.</span> It was a suprise to find out that in order to get photos from Google, you had to go through two APIs; I could've took the time to read through Google's documentation.</p>
                            <p><span className="font-weight-bold">Organize the code.</span> Due to the timeframe given, my team and I were rushing to get the minimum viable product as fast as possible and in doing so made our code unorganized.</p>
                            <p><span className="font-weight-bold">Local Storage.</span> If given more time, it would have been nice to deal more with local storage as it controlled the user's favorites.</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>Github</h2>
                            <p>Look at the code <a href="https://github.com/nss-day-cohort-24/wyfy" target="_blank" rel="noopener noreferrer">here!</a></p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default WyFyMain;