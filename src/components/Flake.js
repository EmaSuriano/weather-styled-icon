import styled from 'styled-components';
import Spin from './animations/Spin';
import { ThemePropType, defaultTheme } from '../constants';

const Flake = styled.div.attrs({
  'data-e2e': 'flake',
  'data-animation': true,
})`
  &:before,
  &:after {
    content: '\\2744';
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -1.5em 0 0 -1.0125em;
    color: ${props => props.theme.snowColor};
    opacity: 0.4;
    animation: ${Spin} 8s linear infinite reverse;
  }
  &:after {
    margin: -0.25em 0 0 -1em;
    font-size: 1.5em;
    opacity: 0.6;
    animation: ${Spin} 14s linear infinite;
  }
  &:nth-child(2):before {
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
  }
`;

Flake.propTypes = {
  theme: ThemePropType,
};

Flake.defaultProps = {
  theme: defaultTheme,
};

Flake.displayName = 'Flake';

export default Flake;
