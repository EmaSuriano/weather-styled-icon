import React from 'react';
import PropTypes from 'prop-types';
import defaultTheme from '../constants/defaultTheme';
import { ThemeProvider } from 'styled-components';

const WeatherThemeProvider = ({ theme, children }) =>
  theme !== defaultTheme ? (
    <ThemeProvider
      theme={{
        ...defaultTheme,
        ...theme,
      }}
    >
      {children}
    </ThemeProvider>
  ) : (
    children
  );

WeatherThemeProvider.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node.isRequired,
};

WeatherThemeProvider.defaultTheme = {
  theme: defaultTheme,
};

export default WeatherThemeProvider;
