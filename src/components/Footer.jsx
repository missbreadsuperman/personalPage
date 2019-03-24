import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer mt-auto py-3">
        <div className="container">
          <span className="text-muted contact">Made with React, Bootstrap</span>
          <span className="text-muted watermark">© Bonnie Hsu 2019</span>
        </div>

      </footer>
    );
  };
}

export default Footer;