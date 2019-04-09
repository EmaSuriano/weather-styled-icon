import React from 'react';
import styled from 'styled-components';
import WeatherContainer from './WeatherContainer';
import Flakes from './Flakes';

const SnowingContainer = styled(WeatherContainer)`
  display: flex;
  justify-content: space-around;
`;

const Snowing = () => (
  <SnowingContainer>
    <Flakes />
    <Flakes />
  </SnowingContainer>
);

export default Snowing;
