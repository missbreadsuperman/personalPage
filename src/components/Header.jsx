import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="jumbotron">
        <nav className="navbar navbar-expand-md">
          <Link className="navbar-brand" to="#">Bonnie</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home<span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/info">Info</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/interest">Interest</Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="banner">
          <h2>Hello, My name is Bonnie.</h2>
        </div>
        <div className="banner">
          <h2>I dream of becomeing a front-end developer.</h2>
        </div>
        <div><img className="photo" alt="photo"/></div>
      </div>
    );
  };
}

export default Header;