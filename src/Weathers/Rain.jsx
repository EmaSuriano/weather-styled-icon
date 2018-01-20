import React from 'react';
import PropTypes from 'prop-types';
import Sunny from './Sunny';
import { Cloud, Lighting, Drops, Icon } from '../components';

const Rain = ({ lighting, patchy, size }) => (
  <Icon size={size}>
    <Cloud />
    {patchy && <Sunny onTheSide />}
    {lighting ? <Lighting /> : <Drops />}
  </Icon>
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
