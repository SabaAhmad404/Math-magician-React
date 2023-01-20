import { useState } from 'react';
import calculate from './logic/calculate';

const Calculator = () => {
  const [display, newDisplay] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const buttonClicked = (event) => {
    const btnName = event.target.innerText;
    const answer = calculate(display, btnName);
    newDisplay(answer);
  };
  const { total, next, operation } = display;

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
          onClick={buttonClicked}
        >
          AC
        </button>
        <button
          type="button"
          className="plus"
          value="+/-"
          onClick={buttonClicked}
        >
          +/-
        </button>
        <button
          type="button"
          className="percentage"
          value="%"
          onClick={buttonClicked}
        >
          %
        </button>
        <button
          type="button"
          className="divide"
          value="/"
          onClick={buttonClicked}
        >
          {' '}
          &divide;
        </button>
        <div className="line2">
          <button
            type="button"
            className="seven"
            value="7"
            onClick={buttonClicked}
          >
            7
          </button>
          <button
            type="button"
            className="eight"
            value="8"
            onClick={buttonClicked}
          >
            8
          </button>
          <button
            type="button"
            className="nine"
            value="9"
            onClick={buttonClicked}
          >
            9
          </button>
          <button
            type="button"
            className="ex"
            value="x"
            onClick={buttonClicked}
          >
            x
          </button>
        </div>
        <div className="line3">
          <button
            type="button"
            className="four"
            value="4"
            onClick={buttonClicked}
          >
            4
          </button>
          <button
            type="button"
            className="five"
            value="5"
            onClick={buttonClicked}
          >
            5
          </button>
          <button
            type="button"
            className="six"
            value="6"
            onClick={buttonClicked}
          >
            6
          </button>
          <button
            type="button"
            className="minus"
            value="-"
            onClick={buttonClicked}
          >
            -
          </button>
        </div>
        <div className="line4">
          <button
            type="button"
            className="one"
            value="1"
            onClick={buttonClicked}
          >
            1
          </button>
          <button
            type="button"
            className="two"
            value="2"
            onClick={buttonClicked}
          >
            2
          </button>
          <button
            type="button"
            className="three"
            value="3"
            onClick={buttonClicked}
          >
            3
          </button>
          <button
            type="button"
            className="plus-sign"
            value="+"
            onClick={buttonClicked}
          >
            +
          </button>
        </div>
        <div className="line5">
          <button
            type="button"
            className="null"
            value="0"
            onClick={buttonClicked}
          >
            0
          </button>
          <button
            type="button"
            className="point"
            value="."
            onClick={buttonClicked}
          >
            .
          </button>
          <button
            type="button"
            className="equal"
            value="="
            onClick={buttonClicked}
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
