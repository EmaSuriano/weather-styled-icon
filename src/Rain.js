import React from 'react';
import PropTypes from 'prop-types';
import {
  WeatherThemeProvider,
  Cloud,
  Lighting,
  Drops,
  Icon,
  Sun,
} from './components';

const Rain = ({ lighting, patchy, size, theme }) => (
  <WeatherThemeProvider theme={theme}>
    <Icon size={size}>
      <Cloud />
      {patchy && <Sun onTheSide />}
      {lighting ? <Lighting /> : <Drops />}
    </Icon>
  </WeatherThemeProvider>
);

Rain.propTypes = {
  lighting: PropTypes.bool,
  patchy: PropTypes.bool,
  size: PropTypes.number,
};

Rain.defaultProps = {
  lighting: false,
  patchy: false,
  size: 1,
};

export default Rain;
