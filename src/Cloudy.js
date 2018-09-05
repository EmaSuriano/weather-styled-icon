import React from 'react';
import PropTypes from 'prop-types';
import { Cloud, Icon, SunSphere, Rays } from './components';

const Cloudy = ({ patchy, size }) => (
  <Icon size={size}>
    <Cloud key="cloud" />
    {patchy ? (
      <Icon>
        <SunSphere onTheSide>
          <Rays />
        </SunSphere>
      </Icon>
    ) : (
      <Cloud />
    )}
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
