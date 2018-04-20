import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
    render(){
        return (
            <div className="container navBar">
                <div className="row">
                    <div className="col-6">Marc Ledda</div>
                    <div className="col text-center">Work</div>
                    <div className="col text-center">Resume</div>
                    <div className="col text-center">About</div>
                </div>
            </div>
        )
    }
}

export default Navigation;