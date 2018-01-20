import React from 'react';
import PropTypes from 'prop-types';
import Sunny from './Sunny';
import { Cloud, Snowing, Icon } from '../components';

const Snow = ({ patchy, size }) => (
  <Icon size={size}>
    <Cloud />
    {patchy && <Sunny onTheSide />}
    <Snowing />
  </Icon>
);

Snow.propTypes = {
  patchy: PropTypes.bool,
  size: PropTypes.number,
};

Snow.defaultProps = {
  patchy: false,
  size: 1,
};

export default Snow;
