import React, { Component } from 'react';
import Calculator from './components/calculator';
import './logic/calculate';
import './logic/operate';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
