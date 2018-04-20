import React, { Component } from 'react';
import Navigation from './components/Navigation';
import TypeOff from './components/TypeOff';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <TypeOff />
      </div>
    );
  }
}

export default App;
