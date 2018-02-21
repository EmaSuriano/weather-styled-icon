import React from 'react';
import PropTypes from 'prop-types';
import { Sun, WeatherThemeProvider } from './components';
import { ThemePropType, defaultTheme } from './constants';

const Sunny = ({ size, theme }) => (
  <WeatherThemeProvider theme={theme}>
    <Sun size={size} />
  </WeatherThemeProvider>
);

Sunny.propTypes = {
  size: PropTypes.number,
  theme: ThemePropType,
};

Sunny.defaultProps = {
  size: 1,
  theme: defaultTheme,
};

export default Sunny;
