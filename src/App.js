import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Main from './components/Main';
import './components/navigation.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import TypeOffMain from './components/TypeOffMain';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 navLink"><Link to="/"><h1>Marc Ledda</h1></Link></div>
              <div className="col-sm align-self-center navLink">Work</div>
              <div className="col-sm align-self-center navLink">Resume</div>
              <div className="col-sm align-self-center navLink">About</div>
            </div>
          </div>
          <Route exact path="/" component={Main} />
          <Route path="/TypeOff" component={TypeOffMain} />
        </div>
      </Router>
    );
  }
}

export default App;
