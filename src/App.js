import React, { Component } from 'react';
import Main from './components/Main';
import './components/navigation.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container navBar">
          <div className="row">
            <div className="col-sm-12 text-center navSmall"><h1>Marc Ledda</h1></div>
            <div className="col-sm text-center navSmall">Work</div>
            <div className="col-sm text-center navSmall">Resume</div>
            <div className="col-sm text-center navSmall">About</div>
          </div>
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
