import React from 'react';
import PropTypes from 'prop-types';
import { SunSphere, Rays, Icon } from './components';

const Sunny = ({ size }) => (
  <Icon size={size}>
    <SunSphere>
      <Rays />
    </SunSphere>
  </Icon>
);

Sunny.propTypes = {
  /** Icon Size */
  size: PropTypes.number,
};

Sunny.defaultProps = {
  size: 1,
};

export default Sunny;
