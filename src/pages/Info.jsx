import React, { Component } from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import './Info.css';


class Info extends Component {
  render() {
    return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-2">
            <h1 className="headText"><strong>簡介</strong></h1>
          </div>
          <div className="col-md-8">
            <table className="table info">
              <tbody>
                <tr>
                  <th scope="row">中文名字</th>
                  <td>徐婉瑄</td>
                </tr>
                <tr>
                  <th scope="row">系別</th>
                  <td>中央大學數學系大四</td>
                </tr>
                <tr>
                  <th scope="row">手機</th>
                  <td>0975073102</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div> 
      <Footer />
    </div>
    )
  }
}

export default Info;
