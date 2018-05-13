import React, { Component } from 'react';
import Greeting from './Greeting';
import TypeOff from './TypeOff';
import Footer from './Footer';

class Main extends Component {
    render(){
        return(
            <div>
                <Greeting />
                <TypeOff />
                <Footer />
            </div>
        )
    }
}

export default Main;