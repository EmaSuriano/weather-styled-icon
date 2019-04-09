module.exports = require('babel-jest').createTransformer({
  presets: ['es2015', 'react'],
  plugins: ['require-context-hook', 'react-hot-loader/babel'],
});
