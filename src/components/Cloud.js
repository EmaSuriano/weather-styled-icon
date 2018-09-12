import styled from 'styled-components';
import Pan from './animations/Pan';
import { ThemePropType, defaultTheme } from '../constants';

const Cloud = styled.div`
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 3.6875em;
  height: 3.6875em;
  margin: -1.84375em;
  background: ${({ theme }) => theme.backgroundColor};
  border-radius: 50%;
  box-shadow: -2.1875em 0.6875em 0 -0.6875em ${({ theme }) => theme.backgroundColor},
    2.0625em 0.9375em 0 -0.9375em ${({ theme }) => theme.backgroundColor},
    0 0 0 0.375em ${({ theme }) => theme.cloudsColor},
    -2.1875em 0.6875em 0 -0.3125em ${({ theme }) => theme.cloudsColor},
    2.0625em 0.9375em 0 -0.5625em ${({ theme }) => theme.cloudsColor};

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -0.5em;
    display: block;
    width: 4.5625em;
    height: 1em;
    background: ${({ theme }) => theme.backgroundColor};
    box-shadow: 0 0.4375em 0 -0.0625em ${({ theme }) => theme.cloudsColor};
  }

  &:nth-child(2) {
    z-index: 0;
    background: ${({ theme }) => theme.cloudsColor};
    box-shadow: -2.1875em 0.6875em 0 -0.6875em ${({ theme }) => theme.cloudsColor},
      2.0625em 0.9375em 0 -0.9375em ${({ theme }) => theme.cloudsColor},
      0 0 0 0.375em ${({ theme }) => theme.cloudsColor},
      -2.1875em 0.6875em 0 -0.3125em ${({ theme }) => theme.cloudsColor},
      2.0625em 0.9375em 0 -0.5625em ${({ theme }) => theme.cloudsColor};
    opacity: 0.6;
    transform: scale(0.5) translate(6em, -3em);
    animation: ${Pan} 4s linear infinite;
  }

  &:nth-child(2):after {
    background: ${({ theme }) => theme.cloudsColor};
  }
`;

Cloud.displayName = 'Cloud';

Cloud.propTypes = {
  theme: ThemePropType,
};

Cloud.defaultProps = {
  theme: defaultTheme,
};

export default Cloud;
