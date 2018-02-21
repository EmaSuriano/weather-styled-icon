import React from 'react';
import PropTypes from 'prop-types';
import { Sun, WeatherThemeProvider } from './components';

const Sunny = ({ size, theme }) => (
  <WeatherThemeProvider theme={theme}>
    <Sun size={size} />
  </WeatherThemeProvider>
);

Sunny.propTypes = {
  size: PropTypes.number,
  theme: PropTypes.object,
};

Sunny.defaultProps = {
  size: 1,
};

export default Sunny;
