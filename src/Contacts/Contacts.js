import React from 'react';
import './Contacts.css';
import { Link } from "react-router-dom";

class Contacts extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2>Contacts</h2>
        <p>Let us know how we are doing, email us at feedback@excurrency.io</p>
        <p>Please read our <Link to="/faq">frequently asked questions</Link> and answers before sending us a message.</p>
      </div>
    );
  }
}

export default Contacts;
