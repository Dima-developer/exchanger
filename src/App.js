import React from 'react';
import { Switch, Route } from "react-router-dom"
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Rate from './Rate/Rate';
import Offices from './Offices/Offices';
import About from './About/About';
import Service_terms from './Service_terms/Service_terms';
import Privacy from './Privacy/Privacy';
import Cookie from './Cookie/Cookie';
import Contacts from './Contacts/Contacts';
import Faq from './Faq/Faq';


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <main>
            <Switch>
              <Route exact path="/" component={Rate} />
              <Route exact path="/offices" component={Offices} />
              <Route exact path="/about" component={About} />
              <Route exact path="/service_terms" component={Service_terms} />
              <Route exact path="/privacy" component={Privacy} />
              <Route exact path="/cookie" component={Cookie} />
              <Route exact path="/contacts" component={Contacts} />
              <Route exact path="/faq" component={Faq} />

            </Switch>
          </main>
        </div>
        <div className="container" id="coockie_info">
          <div className="site-content">
            <div className="well">We use cookies on our website to collect technical information.<br />Particularly, for a site personalized work,  we process the IP address of your location in the region.&nbsp;<button className="btn btn-primary btn-sm">Ok</button></div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
