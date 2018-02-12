import React, { Component } from 'react';
import { render } from 'react-dom';

import { Cloudy, Sunny, Rain, Snow } from '../../src';

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>weather-styled-icon Demo</h1>
        <Cloudy />
        <Sunny />
        <Rain />
        <Snow />
      </div>
    );
  }
}

render(<Demo />, document.querySelector('#demo'));
