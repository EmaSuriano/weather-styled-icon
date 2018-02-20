import React from 'react';
import PropTypes from 'prop-types';
import { Sun } from './Sunny';
import { ThemePropType, defaultTheme } from './constants';
import { Cloud, Icon, WeatherThemeProvider } from './components';

const Cloudy = ({ patchy, size, theme }) => (
  <WeatherThemeProvider theme={theme}>
    <Icon size={size}>
      <Cloud key="cloud" />
      {patchy ? <Sun onTheSide /> : <Cloud />}
    </Icon>
  </WeatherThemeProvider>
);

Cloudy.propTypes = {
  patchy: PropTypes.bool,
  size: PropTypes.number,
  theme: ThemePropType,
};

Cloudy.defaultProps = {
  patchy: false,
  size: 1,
  theme: defaultTheme,
};

export default Cloudy;
