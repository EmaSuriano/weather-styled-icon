import React from 'react';
import PropTypes from 'prop-types';
import { SunSphere, Rays, Icon } from './';

const Sun = ({ onTheSide, size }) => (
  <Icon size={size}>
    <SunSphere onTheSide={onTheSide}>
      <Rays />
    </SunSphere>
  </Icon>
);

Sun.propTypes = {
  onTheSide: PropTypes.bool,
  size: PropTypes.number,
};

Sun.defaultProps = {
  onTheSide: false,
  size: 1,
};

export default Sun;
