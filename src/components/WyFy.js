import React, { Component } from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    Link
  } from 'react-router-dom';
import wyfyMain from '../media/wyfy/wyfyMain.png';
import './mainItem.css'

class WyFy extends Component{
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
                        <img className="img-fluid" src={wyfyMain} alt="WyFy Banner"/>
                        <h2>WyFy</h2>
                        <h4 className="Desc">An app to find local free wifi hotspots based on your location or zipcode.</h4>
                        <Link to="/portfolio/WyFy" onClick={this.topFunction} className="btn btn-secondary"><h6 className="readMore m-0">Read More</h6></Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default WyFy;