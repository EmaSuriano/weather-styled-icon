import PropTypes from 'prop-types';
import styled from 'styled-components';
import defaultTheme from './defaultTheme';

const Rays = styled.div`
  position: absolute;
  top: -2em;
  left: 50%;
  display: block;
  width: 0.375em;
  height: 1.125em;
  margin-left: -0.1875em;
  border-radius: 0.25em;
  background: ${({ theme }) => theme.raysColor};
  box-shadow: 0 5.375em ${({ theme }) => theme.raysColor};

  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 0em;
    left: 0em;
    display: block;
    width: 0.375em;
    height: 1.125em;
    transform: rotate(60deg);
    transform-origin: 50% 3.25em;
    border-radius: 0.25em;
    background: ${({ theme }) => theme.raysColor};
    box-shadow: 0 5.375em ${({ theme }) => theme.raysColor};
  }

  &:before {
    transform: rotate(120deg);
  }
`;

Rays.propTypes = {
  theme: PropTypes.shape({
    raysColor: PropTypes.string,
  }),
};

Rays.defaultProps = {
  theme: defaultTheme,
};

export default Rays;
