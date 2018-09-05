import React from 'react';
import PropTypes from 'prop-types';
import { Cloud, Snowing, Icon, SunSphere, Rays } from './components';

const Snow = ({ patchy, size }) => (
  <Icon size={size}>
    <Cloud />
    {patchy && (
      <Icon>
        <SunSphere onTheSide>
          <Rays />
        </SunSphere>
      </Icon>
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
