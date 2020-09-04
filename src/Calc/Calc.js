import React from 'react';
import './Calc.css';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0
    }
  }
  static getDerivedStateFromProps(props, state) {
    return { rate: props.rate };
  }
  calcRate = (e) => {
    e.preventDefault();
    console.log('work');
    let elements = e.target.elements;
    console.log(elements);
    console.log(elements['count-currency'].value);
    console.log(elements['type-currency'].value);
    let countCurrency = elements['count-currency'].value;
    let typeCurrency = elements['type-currency'].value;
    this.setState({ result: (countCurrency / this.state.rate[typeCurrency]).toFixed(2) })
  }

  render() {
    return (
      <div className="calculator">
        <h3>Exchange calculator</h3>
        <div className="block">
          <h4 className="result">I want:</h4>

          <div>
            <form onSubmit={this.calcRate}>
              <input type="number" defaultValue="150" name="count-currency" />
              <select name="type-currency" id="" >
                {Object.keys(this.props.rate).map((keyName, i) =>
                  (
                    <option key={keyName} value={keyName} >{keyName}</option>
                  )
                )}
              </select>
              <button type="submit">Buy</button>
              {/* <input type="submit" defaultValue="calc" /> */}
            </form>
          </div>
          <div>
            <h4 className="result">Result:</h4>

            <div className="calc-res">
              <p>EUR {this.state.result}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calc;
