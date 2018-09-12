import React from 'react';
import PropTypes from 'prop-types';
import { Cloud, Icon, Patchy } from './components';
import Sunny from './Sunny';

const Cloudy = ({ patchy, size }) => (
  <Icon size={size}>
    <Cloud key="cloud" />
    {patchy ? (
      <Patchy>
        <Sunny />
      </Patchy>
    ) : (
      <Cloud />
    )}
  </Icon>
);

Cloudy.propTypes = {
  /** Icon Sun */
  size: PropTypes.number,
  /** Display Sun */
  patchy: PropTypes.bool,
};

Cloudy.defaultProps = {
  patchy: false,
  size: 1,
};

export default Cloudy;
