import React from 'react';
import styled from 'styled-components';
import Spin from './animations/Spin';
import { ThemePropType, defaultTheme } from '../constants';

const Flake = styled.div.attrs({
  'data-e2e': 'flake',
  'data-animation': true,
})`
  /* position: absolute; */

    color: ${props => props.theme.snowColor};
    opacity: 0.4;
    top: 50%;
  left: 50%;
  width: 1em;
  height: 1em;
    animation: ${Spin} 8s linear infinite ${props =>
  props.reverse ? 'reverse' : ''};

   /* &:before,
  &:after {
    content: '\\2744';
    position: absolute;

    opacity: 0.4;
  } */
  /*

  &:after {
    margin: -0.25em 0 0 -1em;
    font-size: 1.5em;
    opacity: 0.6;
    animation: ${Spin} 14s linear infinite;
  } */

  /* &:nth-child(2):before {
    margin: -0.75em 0 0 0.15em;
    font-size: 1.25em;
    opacity: 0.4;
    animation: ${Spin} 10s linear infinite;
  }

  &:nth-child(2):after {
    margin: 0em 0 0 0.125em;
    font-size: 2em;
    opacity: 0.6;
    animation: ${Spin} 16s linear infinite reverse;
  } */
`;

const A = styled.div`
  display: flex;
`;

const Flakes = () => (
  <A>
    <Flake>&#10052;</Flake>
    <Flake reverse>&#10052;</Flake>
  </A>
);

Flakes.displayName = 'Flakes';

export default Flakes;
