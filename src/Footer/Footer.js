import React from 'react';
import { Link } from "react-router-dom";
import './Footer.css';

class Footer extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <footer id="footer" className="footer">
        <div className="footer-bottom">
          <div className="container">
            <div className="footer__paymethod">
              <div className="footer__paymethod_item">Visa</div>
              <div className="footer__paymethod_item">Mastercard</div>
              <div className="footer__paymethod_item">Paypal</div>
              <div className="footer__paymethod_item">Skrill</div>

            </div>
            <div className="d-flex justify-content-start">
              <div className="">
                <Link to="/service_terms">Terms of Service</Link>
              </div>
              <div className="">
                <Link to="/privacy">Privacy</Link>
              </div>
              <div className="">
                <Link to="/cookie">Cookie</Link>
              </div>
              <div className="">
                <Link to="/contacts">Contacts</Link>
              </div>
              <div className="">
                <Link to="/faq">FAQ</Link>
              </div>
            </div>
            <div>
              <p className="footer-title"><a href="#">2020 &copy; Currency exchange</a></p>
              <p>All Rights Reserved</p>
            </div>
          </div>
        </div>
        <div className="copyright-bar">
          <div className="flex-container">
            <div className="flex-item">

            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
