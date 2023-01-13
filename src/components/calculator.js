import { Component } from 'react';
import calculate from '../logic/calculate';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = { total: 0, next: null, operation: null };
  }

  buttonClicked = (event) => {
    const btnName = event.target.innerText;
    const answer = calculate(this.state, btnName);
    this.setState(answer);
  };

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="container">
        <div className="zero">
          {total}
          {operation}
          {next}
        </div>
        <div className="line1">
          <button
            type="button"
            className="clearAll"
            value="all-clear"
            onClick={this.buttonClicked}
          >
            AC
          </button>
          <button
            type="button"
            className="plus"
            value="+/-"
            onClick={this.buttonClicked}
          >
            +/-
          </button>
          <button
            type="button"
            className="percentage"
            value="%"
            onClick={this.buttonClicked}
          >
            %
          </button>
          <button
            type="button"
            className="divide"
            value="/"
            onClick={this.buttonClicked}
          >
            {' '}
            &divide;
          </button>
          <div className="line2">
            <button
              type="button"
              className="seven"
              value="7"
              onClick={this.buttonClicked}
            >
              7
            </button>
            <button
              type="button"
              className="eight"
              value="8"
              onClick={this.buttonClicked}
            >
              8
            </button>
            <button
              type="button"
              className="nine"
              value="9"
              onClick={this.buttonClicked}
            >
              9
            </button>
            <button
              type="button"
              className="ex"
              value="x"
              onClick={this.buttonClicked}
            >
              x
            </button>
          </div>
          <div className="line3">
            <button
              type="button"
              className="four"
              value="4"
              onClick={this.buttonClicked}
            >
              4
            </button>
            <button
              type="button"
              className="five"
              value="5"
              onClick={this.buttonClicked}
            >
              5
            </button>
            <button
              type="button"
              className="six"
              value="6"
              onClick={this.buttonClicked}
            >
              6
            </button>
            <button
              type="button"
              className="minus"
              value="-"
              onClick={this.buttonClicked}
            >
              -
            </button>
          </div>
          <div className="line4">
            <button
              type="button"
              className="one"
              value="1"
              onClick={this.buttonClicked}
            >
              1
            </button>
            <button
              type="button"
              className="two"
              value="2"
              onClick={this.buttonClicked}
            >
              2
            </button>
            <button
              type="button"
              className="three"
              value="3"
              onClick={this.buttonClicked}
            >
              3
            </button>
            <button
              type="button"
              className="plus-sign"
              value="+"
              onClick={this.buttonClicked}
            >
              +
            </button>
          </div>
          <div className="line5">
            <button
              type="button"
              className="null"
              value="0"
              onClick={this.buttonClicked}
            >
              0
            </button>
            <button
              type="button"
              className="point"
              value="."
              onClick={this.buttonClicked}
            >
              .
            </button>
            <button
              type="button"
              className="equal"
              value="="
              onClick={this.buttonClicked}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
