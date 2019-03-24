import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Interest.css';



class Interest extends Component {
  render() {
    const interest = [
      {
        name: 'Music',
        description: `我很欣賞各種風格的音樂，從裡頭能得到作者想要傳達的理念。
          在表演時，我也希望能將自己當下的情緒、喜悅，和我的團員們一起傳達給台下的所有觀眾。`,
      },
      {
        name: 'Basketball',
        description: `享受練球、比賽時，一個團隊朝向同個目標前進的感覺。
          就算跌倒了，也會有一堆人搶著去扶你起來。`,
      },
      {
        name: 'Workout',
        description: `運動我最放鬆的時刻，全心全意投入在身體的感受，疲勞是因為我下了努力。
          當然，在鏡子前面也能看到所有累積下來的成果`,
      },
    ];

    let interestList = interest.map((interest,i)=> { return (
      <div className="card" key={i}>
        <div className="row">
          <div className="col-md-8">
            <div className="card-block">
              <h3 className="card-title">{ interest.name }</h3>
              <h6 className="card-text">{ interest.description }</h6>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-img-bottom">
              <img className={ interest.name } alt={ interest.name } />
            </div>
          </div>
        </div>
      </div>
    )});
        
        
   
    return (
      <div>
        <Header />
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <h1 className="headText"><strong>興趣</strong></h1>
              </div>
              <div className="col-md-9">
                { interestList }
              </div>
          </div>
          </div>
        <Footer /> 
      </div>
    );
  };
}

export default Interest;