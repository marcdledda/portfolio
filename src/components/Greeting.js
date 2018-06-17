import React, { Component } from 'react';
import "./greeting.css";

class Greeting extends Component {
    render() {
        return(
            <div className="p-lg-3 mx-auto mt-lg-5 mb-lg-4">
                <div className="col text-center p-lg-5 mx-auto m-5">
                    <h1 className="greetMain">Marc Ledda</h1>
                    <p className="greetDesc">FRONT-END WEB DEVELOPER</p>
                    <p className="greetDesc">GAME DEVELOPER</p>
                    <p className="greetDesc">UI/UX DESIGNER</p>
                </div>
            </div>
        )
    }
}

export default Greeting;