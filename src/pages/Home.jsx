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
        <h2>Welcome</h2>
        <p>world</p>
      </div> 
      <Footer />
    </div>
    )
  }
}

export default Home;
