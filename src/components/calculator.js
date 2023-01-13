import React from 'react';

class Cal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <button type="button" className="zero">
          0
        </button>
        <div className="line1">
          <button type="button" className="clearAll">
            AC
          </button>
          <button type="button" className="plus">
            +/-
          </button>
          <button type="button" className="percentage">
            %
          </button>
          <button type="button" className="divide">
            {' '}
            &divide;
          </button>
          <div className="line2">
            <button type="button" className="seven">
              7
            </button>
            <button type="button" className="eight">
              8
            </button>
            <button type="button" className="nine">
              9
            </button>
            <button type="button" className="ex">
              x
            </button>
          </div>
          <div className="line3">
            <button type="button" className="four">
              4
            </button>
            <button type="button" className="five">
              5
            </button>
            <button type="button" className="six">
              6
            </button>
            <button type="button" className="minus">
              -
            </button>
          </div>
          <div className="line4">
            <button type="button" className="one">
              1
            </button>
            <button type="button" className="two">
              2
            </button>
            <button type="button" className="three">
              3
            </button>
            <button type="button" className="plus-sign">
              +
            </button>
          </div>
          <div className="line5">
            <button type="button" className="null">
              0
            </button>
            <button type="button" className="point">
              .
            </button>
            <button type="button" className="equal">
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export { Cal as default };
