import React from 'react';
import PropTypes from 'prop-types';
import { Sun, WeatherThemeProvider } from './components';

const Sunny = ({ onTheSide, size, theme }) => (
  <WeatherThemeProvider theme={theme}>
    <Sun onTheSize={onTheSide} size={size} />
  </WeatherThemeProvider>
);

Sunny.propTypes = {
  onTheSide: PropTypes.bool,
  size: PropTypes.number,
  theme: PropTypes.object,
};

Sunny.defaultProps = {
  onTheSide: false,
  size: 1,
};

export default Sunny;
