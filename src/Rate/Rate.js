import React from 'react';
import './Rate.css';
import Calc from '../Calc/Calc';


class Rate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'date': '',
      'currencyRate': {}
    }
    this.currency = ['USD', 'RUB', 'CAD', 'PLN'];
    this.getRate();
  }

  getRate = () => {
    fetch('https://api.exchangeratesapi.io/latest')
      .then(data => {
        return data.json();
      })
      .then(data => {
        this.setState({ date: data.date });
        let result = {};
        for (let i = 0; i < this.currency.length; i++) {
          result[this.currency[i]] = data.rates[this.currency[i]];
        }
        this.setState({ currencyRate: result });
      })
  }

  render() {
    return (
      <div className="rate">
        <h3>Exchange rates on {this.state.date}</h3>
        <div className="flex-container">
          {Object.keys(this.state.currencyRate).map((keyName, i) =>
            (
              <div className="block flex-item" key={keyName}>
                <div className="currency-name">{keyName}</div>
                <div className="currency-in">{this.state.currencyRate[keyName].toFixed(2)}*</div>
                <div className="currency-out">* Rate for 1 EUR</div>
              </div>
            )
          )}
        </div>
        <Calc rate={this.state.currencyRate} />
      </div>
    );
  }
}

export default Rate;
