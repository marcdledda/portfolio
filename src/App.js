import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Main from './components/Main';
import './components/navigation.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container navBar">
            <div className="row">
              <div className="col-sm-12 text-center navSmall"><h1>Marc Ledda</h1></div>
              <div className="col-sm text-center navSmall"><Link to="/">Work</Link></div>
              <div className="col-sm text-center navSmall">Resume</div>
              <div className="col-sm text-center navSmall"><Link to="/About">About</Link></div>
            </div>
          </div>
          <Main />
        </div>
      </Router>
    );
  }
}

export default App;
