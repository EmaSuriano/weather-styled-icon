import React from 'react';
import PropTypes from 'prop-types';
import { SunSphere, Rays, Icon, WeatherThemeProvider } from './components';

const Sunny = ({ onTheSide, size, theme }) => (
  <WeatherThemeProvider theme={theme}>
    <Icon size={size}>
      <SunSphere onTheSide={onTheSide}>
        <Rays />
      </SunSphere>
    </Icon>
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
