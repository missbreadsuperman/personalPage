import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './Home.css';


class Home extends Component {
  render() {
    return (
    <div>
      <Header />
      <div className="container">
        <h2>Contact Me</h2>
        <div className="card contact">
          <div className="card-body">
            Email: <a href="mailto:missbreadsuperman@gmail.com">missbreadsuperman@gmail.com</a>
            <br />Github: <a href="https://github.com/missbreadsuperman">https://github.com/missbreadsuperman</a>
            <br />phone: 0975073102
          </div>
      </div>
      </div> 
      <Footer />
    </div>
    )
  }
}

export default Home;
