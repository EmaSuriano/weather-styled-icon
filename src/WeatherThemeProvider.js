import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { ThemePropType, defaultTheme } from './constants';

const WeatherThemeProvider = ({ theme, children }) => (
  <ThemeProvider theme={{ ...defaultTheme, ...theme }}>
    {children}
  </ThemeProvider>
);

WeatherThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
  theme: ThemePropType,
};

WeatherThemeProvider.defaultProps = {
  theme: defaultTheme,
};

export default WeatherThemeProvider;
