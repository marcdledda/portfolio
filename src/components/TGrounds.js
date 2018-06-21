import React, { Component } from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    Link
} from 'react-router-dom';
import tgMain from '../media/testingGrounds/tgMain.png';
import './mainItem.css'

class TGrounds extends Component {
    constructor(props){
        super(props);
        this.topFunction = this.topFunction.bind(this);
    }

    topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render(){
        return(
            <div className="container">
                <div className="row pb-5 justify-content-center my-5 bottomBorder">
                    <div className="col-lg-9 centerMainItem">
                        <img className="img-fluid" src={tgMain} alt="Testing Grounds Banner"/>
                        <h2>Testing Grounds</h2>
                        <h4 className="Desc">An interactive application meant to be an introduction to Virtual Reality.</h4>
                        <Link to="/portfolio/TestingGrounds" onClick={this.topFunction} className="btn btn-secondary"><h6 className="readMore m-0">Read More</h6></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default TGrounds;