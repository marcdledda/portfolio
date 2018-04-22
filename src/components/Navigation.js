import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
    render(){
        return (
            <div className="container navBar">
                <div className="row">
                    <div className="col-sm-12 text-center">Marc Ledda</div>
                    <div className="col-sm text-center">Work</div>
                    <div className="col-sm text-center">Resume</div>
                    <div className="col-sm text-center">About</div>
                </div>
            </div>
        )
    }
}

export default Navigation;