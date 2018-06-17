import React, { Component } from 'react';
import Greeting from './Greeting';
import TypeOff from './TypeOff';
import WyFy from './WyFy';
import TGrounds from './TGrounds';
import Footer from './Footer';

class Main extends Component {
    render(){
        return(
            <div>
                <Greeting />
                <TGrounds />
                <WyFy />
                <TypeOff />
                <Footer />
            </div>
        )
    }
}

export default Main;