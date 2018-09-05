import React from 'react';
import PropTypes from 'prop-types';
import { Cloud, Lighting, Drops, Icon, SunSphere, Rays } from './components';

const Rain = ({ lighting, patchy, size }) => (
  <Icon size={size}>
    <Cloud />
    {patchy && (
      <Icon>
        <SunSphere onTheSide>
          <Rays />
        </SunSphere>
      </Icon>
    )}
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
