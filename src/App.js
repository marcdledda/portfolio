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
          <div className="container navContain">
            <div className="row">
              <div className="col-sm-6 navHome"><h3><Link to="/">Marc Ledda</Link></h3></div>
              <div className="col-sm navResume align-self-center">Resume</div>
              <div className="col-sm align-self-center text-center">About</div>
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
