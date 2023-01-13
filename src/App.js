import React from 'react';
import Calculator from './components/calculator';
import './logic/calculate';
import './logic/operate';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
