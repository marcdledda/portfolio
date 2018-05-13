import React, { Component } from 'react';
import {
    // BrowserRouter as Router,
    // Route,
    Link
  } from 'react-router-dom';
import typeOffBanner from '../media/typeOffIMG.png';
import Footer from './Footer';
import './typeOff.css'

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
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img className="img-fluid typeOffImg" src={typeOffBanner} alt="TypeOff game banner"/>
                        </div>
                        <div className="col-12"><h2 className="typeOffTitle">TypeOff</h2></div>
                        <div className="col-12 typeOffDesc"><h4>A web game that uses typing as its main mechanic.</h4></div>
                        <div className="col-12 readBtn">
                            <Link to="/TypeOff" onClick={this.topFunction} className="btn btn-secondary"><h6 className="readMore">Read More</h6></Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default TypeOff;