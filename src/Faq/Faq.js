import React from 'react';
import './Faq.css';
import { Link } from "react-router-dom";

class Faq extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2>Frequently Asked Questions</h2>
        <p>Questions related to ads displayed on this site and about advertising on this site in general, please refer to our advertising FAQ page.</p>
        <div>
          <h2>How often are the rates updated?</h2>
          <p>The rates are updated every 60 seconds. They reflect any changes occurring in markets worldwide, whenever they occur. During the weekends, the rates are typically stable as the major markets are closed and there is very little trading to be reported.</p>
          <p>Prior to August 2nd 2012 our rates were updated at most once per day, dependent upon their availability from the rights free sources that we used. If no rates were available, non were published for that day.</p>
        </div>
        <div>
          <h3>What is the source of the data on this site?</h3>
          <p>As of August 2nd 2012 we have implemented a commercial grade rate feed, which blends rates from a large array of independent sources. This allows us to provide much more timely and accurate rates in our services.</p>
          <p>Please read our <Link to="/service_terms">disclaimer</Link> about reliability and availability of the rates on this site.</p>
        </div>
        <div>
          <h3>When are your historical rates updated?</h3>
          <p>Since implementing our live rate feed, historical rates are now provided as of noon (12pm) Eastern each day. If you select the current day in the historical lookup, you will receive the current rate.</p>
        </div>
        <div>
          <h3>Why are exchange rates from other sources different?</h3>
          <p>Exchange rates vary from source to source, for commercial reasons. Banks, credit card companies and other providers of exchange rates information will likely differ from the rates on this site.</p>
        </div>
        <div>
          <h3>Why is my country not represented on this site?</h3>
          <p>Unfortunately we can only provide rate information for the currencies we currently have available. If we’re able to include a different country we will do so as soon as it’s available to us. In the meantime, please understand that we are not deliberately omitting any specific countries from the list.</p>
        </div>
        <div>
          <h3>How can I complain/make a suggestion/thank you?</h3>
          <p>Please use our <Link to="/contacts">contact page</Link>.</p>
        </div>
      </div>
    );
  }
}

export default Faq;
