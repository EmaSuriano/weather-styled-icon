import React from 'react';
import PropTypes from 'prop-types';
import { Cloud, Snowing, Icon, WeatherThemeProvider, Sun } from './components';
import { ThemePropType, defaultTheme } from './constants';

const Snow = ({ patchy, size, theme }) => (
  <WeatherThemeProvider theme={theme}>
    <Icon size={size}>
      <Cloud />
      {patchy && <Sun onTheSide />}
      <Snowing />
    </Icon>
  </WeatherThemeProvider>
);

Snow.propTypes = {
  patchy: PropTypes.bool,
  size: PropTypes.number,
  theme: ThemePropType,
};

Snow.defaultProps = {
  patchy: false,
  size: 1,
  theme: defaultTheme,
};

export default Snow;
