import React from 'react';
import PropTypes from 'prop-types';
import Sunny from './Sunny';
import { Cloud, Snowing, Icon, Patchy } from './components';

const Snow = ({ patchy, size }) => (
  <Icon size={size}>
    <Cloud />
    {patchy && (
      <Patchy>
        <Sunny />
      </Patchy>
    )}
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
