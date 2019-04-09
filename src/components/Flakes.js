import React from 'react';
import styled from 'styled-components';
import Spin from './animations/Spin';
import { ThemePropType, defaultTheme } from '../constants';

const Flake = styled.div.attrs({
  'data-e2e': 'flake',
  'data-animation': true,
})`
  color: ${({ theme }) => theme.snowColor};
  opacity: 0.4;
  font-size: 1em;
  animation: ${Spin} 8s linear infinite;

  &:nth-child(2) {
    font-size: 1.5em;
    opacity: 0.6;
    margin-top: -0.1em;
    animation: ${Spin} 8s linear infinite reverse;
  }
`;

Flake.propTypes = { theme: ThemePropType };

Flake.defaultProps = { theme: defaultTheme };

const FlakesContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.2em;
  align-items: flex-end;

  &:nth-child(2) {
    margin-top: 0.3em;
    font-size: 1.3em;
    align-items: flex-start;

    & > * {
      animation-direction: reverse;
    }
  }
`;

const Flakes = () => (
  <FlakesContainer>
    <Flake>&#10052;</Flake>
    <Flake>&#10052;</Flake>
  </FlakesContainer>
);

Flakes.displayName = 'Flakes';

export default Flakes;
