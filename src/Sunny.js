import React from 'react';
import PropTypes from 'prop-types';
import { SunSphere, Rays, Icon, WeatherThemeProvider } from './components';

// TODO: move Sun to components folder
export const Sun = ({ onTheSide, size }) => (
  <Icon size={size}>
    <SunSphere onTheSide={onTheSide}>
      <Rays />
    </SunSphere>
  </Icon>
);

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
