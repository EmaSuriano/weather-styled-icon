import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import defaultTheme from './defaultTheme';

const Spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const SunSphere = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.5em;
  height: 2.5em;
  background: ${({ theme }) => theme.backgroundColor};
  margin: ${({ onTheSide }) => (onTheSide ? '-2em 1em' : '-1.25em')};
  border-radius: 50%;
  box-shadow: 0 0 0 0.375em ${({ theme }) => theme.sunColor};
  animation: ${Spin} 12s infinite linear;
`;

SunSphere.propTypes = {
  onTheSide: PropTypes.bool,
  theme: PropTypes.shape({
    sunColor: PropTypes.string,
    backgroundColor: PropTypes.string,
  }),
};

SunSphere.defaultProps = {
  onTheSide: false,
  theme: defaultTheme,
};

export default SunSphere;
