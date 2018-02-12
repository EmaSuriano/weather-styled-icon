import React from 'react';
import PropTypes from 'prop-types';
import Sunny from './Sunny';
import { Cloud, Icon, WeatherThemeProvider } from './components';

const Cloudy = ({ patchy, size, theme }) => (
  <WeatherThemeProvider theme={theme}>
    <Icon size={size}>
      <Cloud key="cloud" />
      {patchy ? <Sunny onTheSide /> : <Cloud />}
    </Icon>
  </WeatherThemeProvider>
);

Cloudy.propTypes = {
  patchy: PropTypes.bool,
  size: PropTypes.number,
  theme: PropTypes.object,
};

Cloudy.defaultProps = {
  patchy: false,
  size: 1,
};

export default Cloudy;
