import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Main from './components/Main';
import TypeOffMain from './components/TypeOffMain';
import About from './components/About';
import resume from './media/marcLedda.pdf';
import './components/navigation.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './app.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <div className="container navContain">
            <div className="row">
              <div className="col-sm-6 navHome"><h3><Link className="link" to="/">Marc Ledda</Link></h3></div>
              <div className="col-sm navResume align-self-center"><a className="link" href={resume} target="_blank" rel="noopener noreferrer">Resume</a></div>
              <div className="col-sm align-self-center text-center"><Link className="link" to="/About">About</Link></div>
            </div>
          </div>
          <Route exact path="/" component={Main} />
          <Route path="/About" component={About} />
          <Route path="/TypeOff" component={TypeOffMain} />
        </div>
      </Router>
    );
  }
}

export default App;
