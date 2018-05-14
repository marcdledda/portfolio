import React, { Component } from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    Link
  } from 'react-router-dom';
import typeOffBanner from '../media/typeOff/typeOffIMG.png';
import './mainItem.css'

class TypeOff extends Component {
    constructor(props){
        super(props);
        this.topFunction = this.topFunction.bind(this);
    }

    topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    render(){
        return (
            <div className="container">
                <div className="row my-5">
                    <div className="col centerMainItem">
                        <img className="img-fluid" src={typeOffBanner} alt="TypeOff game banner"/>
                        <h2>TypeOff</h2>
                        <h4 className="typeOffDesc">A web game that uses typing as its main mechanic.</h4>
                        <Link to="/portfolio/TypeOff" onClick={this.topFunction} className="btn btn-secondary"><h6 className="readMore m-0">Read More</h6></Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default TypeOff;