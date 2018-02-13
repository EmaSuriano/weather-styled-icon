import React, { Component } from 'react';
import { render } from 'react-dom';
import Demo from './Demo';
import WebFont from 'webfontloader';
import './Demo.css';
// class Demo extends Component {
//   render() {
//     return (
//       <div>
//         <h1>weather-styled-icon Demo</h1>
//         <Cloudy />
//         <Sunny />
//         <Rain />
//         <Snow />
//       </div>
//     );
//   }
// }

WebFont.load({
  google: {
    families: ['Nunito:300,400,700', 'sans-serif'],
  },
});

render(<Demo />, document.querySelector('#demo'));

if (module.hot) {
  console.log('Aplying hot reload');
  module.hot.accept();
}
