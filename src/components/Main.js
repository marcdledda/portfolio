import React, { Component } from 'react';
import Greeting from './Greeting';
import TypeOff from './TypeOff';

class Main extends Component {
    render(){
        return(
            <div>
                <Greeting />
                <TypeOff />
            </div>
        )
    }
}

export default Main;