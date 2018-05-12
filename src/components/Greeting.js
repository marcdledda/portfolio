import React, { Component } from 'react';
import "./greeting.css";

class Greeting extends Component {
    render() {
        return(
            <div className="p-lg-3 mx-auto my-lg-5">
                <div className="col text-center p-lg-5 mx-auto my-5">
                    <h1 className="greetMain">Marc Ledda</h1>
                    <p className="greetDesc">FRONT-END WEB DEVELOPER</p>
                </div>
            </div>
        )
    }
}

export default Greeting;