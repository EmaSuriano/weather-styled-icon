import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';
import WebFont from 'webfontloader';
import './Demo.css';

WebFont.load({
  google: {
    families: ['Nunito:300,400,700', 'sans-serif'],
  },
});

ReactDOM.render(<Demo />, document.querySelector('#demo'));

console.log('asljkdjalksdj');

if (module.hot) {
  console.log('Aplying hot reload');
  module.hot.accept();
}
