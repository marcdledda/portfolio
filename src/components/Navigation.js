import React, { Component } from 'react';
import './navigation.css';

class Navigation extends Component {
    render(){
        return (
            <div className="container navBar">
                <div className="row">
                    <div className="col-sm-12 text-center navSmall"><h1>Marc Ledda</h1></div>
                    <div className="col-sm text-center navSmall">Work</div>
                    <div className="col-sm text-center navSmall">Resume</div>
                    <div className="col-sm text-center navSmall">About</div>
                </div>
            </div>
        )
    }
}

export default Navigation;