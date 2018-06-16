import React, { Component } from 'react';
import wyfyEX from '../media/wyfy/wyfyEX.png';
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
                            <img className="img-fluid pl-lg-4 pr-lg-5" src={wyfyEX} alt="TypeOff Example Screen"/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col text-center px-lg-5 py-lg-4 mx-auto mt-5">
                            <h2>The Challenge</h2>
                            <p>To create an app that allows a user the ability to discover local wi-fi resources from Nashville’s Open Data Portal based on their current location.</p>
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

                </div>
                <Footer />
            </div>
        );
    }
}

export default WyFyMain;