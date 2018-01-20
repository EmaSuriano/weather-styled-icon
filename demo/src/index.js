import React, { Component } from 'react';
import { render } from 'react-dom';

import { Cloudy } from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>weather-styled-icon Demo</h1>
        <Cloudy />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
