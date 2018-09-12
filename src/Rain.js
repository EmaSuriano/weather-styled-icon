import React from 'react';
import PropTypes from 'prop-types';
import { Cloud, Lighting, Drops, Icon, Patchy } from './components';
import Sunny from './Sunny';

const Rain = ({ lighting, patchy, size }) => (
  <Icon size={size}>
    <Cloud />
    {patchy && (
      <Patchy>
        <Sunny />
      </Patchy>
    )}
    {lighting ? <Lighting /> : <Drops />}
  </Icon>
);

Rain.propTypes = {
  /** Icon size */
  size: PropTypes.number,
  /** Display Bolts */
  lighting: PropTypes.bool,
  /** Display Sun */
  patchy: PropTypes.bool,
};

Rain.defaultProps = {
  lighting: false,
  patchy: false,
  size: 1,
};

export default Rain;
