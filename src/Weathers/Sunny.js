import React from 'react';
import PropTypes from 'prop-types';
import { SunSphere, Rays, Icon } from '../components';

const Sunny = ({ onTheSide, size }) => (
  <Icon size={size}>
    <SunSphere onTheSide={onTheSide}>
      <Rays />
    </SunSphere>
  </Icon>
);

Sunny.propTypes = {
  onTheSide: PropTypes.bool,
  size: PropTypes.number,
};

Sunny.defaultProps = {
  onTheSide: false,
  size: 1,
};

export default Sunny;
