import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Info from './pages/Info';
import Interest from './pages/Interest';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/info" component={ Info }/>
          <Route exact path="/interest" component={ Interest }/>
        </div>
      </Router>
    );
  }
}

export default App;
