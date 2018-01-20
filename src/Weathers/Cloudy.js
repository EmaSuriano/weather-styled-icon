import React from 'react';
import PropTypes from 'prop-types';
import Sunny from './Sunny';
import { Cloud, Icon } from '../components';

const Cloudy = ({ patchy, size }) => (
  <Icon size={size}>
    <Cloud key="cloud" />
    {patchy ? <Sunny onTheSide /> : <Cloud />}
  </Icon>
);

Cloudy.propTypes = {
  patchy: PropTypes.bool,
  size: PropTypes.number,
};

Cloudy.defaultProps = {
  patchy: false,
  size: 1,
};

export default Cloudy;
