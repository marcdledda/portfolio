import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import TypeOffMain from './TypeOffMain';
import typeOffBanner from '../media/typeOffIMG.png';
import './typeOff.css'

class TypeOff extends Component {
    render(){
        return (
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img className="img-fluid typeOffImg" src={typeOffBanner} alt="TypeOff game banner"/>
                        </div>
                        <div className="col-12 align-self-center"><h2 className="typeOffTitle">TypeOff</h2></div>
                        <div className="col-12 typeOffDesc"><h4>A web game that uses typing as its main mechanic.</h4></div>
                        <div className="col-12 readBtn">
                            <Link to="/casestudy/TypeOff" className="btn btn-secondary"><h6>Read More</h6></Link>
                        </div>
                    </div>
                    <Route path="/casestudy/TypeOff" component={TypeOffMain}/>
                </div>
            </Router>
        )
    }
}

export default TypeOff;