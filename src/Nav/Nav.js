import React from 'react';
import { Link } from "react-router-dom";

import './Nav.css';

class Nav extends React.Component {

  render() {
    return (

      <div className="header-nav">
        <div className="container">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/offices">Exchange offices</Link>
              </li>
              <li>
                <Link to="/about">About us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
