import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { ThemePropType, defaultTheme } from '../constants';

export const DropAnimation = ({ theme }) => keyframes`
0% {
  background: ${theme.dropsColor};
  box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
    -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
    -1.375em -0.125em 0 ${theme.dropsColor};
}
25% {
  box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
    -0.875em 1.125em 0 -0.125em ${theme.dropsColor},
    -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
}
50% {
  background: rgba(255, 255, 255, 0.3);
  box-shadow: 0.625em 0.875em 0 -0.125em ${theme.dropsColor},
    -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
    -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
}
100% {
  box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
    -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
    -1.375em -0.125em 0 ${theme.dropsColor};
}
`;

const Drop = styled.div`
  &:after {
    content: '';
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    width: 1.125em;
    height: 1.125em;
    margin: -1em 0 0 -0.25em;
    background: ${({ theme }) => theme.dropsColor};
    border-radius: 100% 0 60% 50% / 60% 0 100% 50%;
    box-shadow: 0.625em 0.875em 0 -0.125em rgba(255, 255, 255, 0.2),
      -0.875em 1.125em 0 -0.125em rgba(255, 255, 255, 0.2),
      -1.375em -0.125em 0 rgba(255, 255, 255, 0.2);
    transform: rotate(-28deg);
    animation: ${DropAnimation} 3s linear infinite;
  }
`;

Drop.propTypes = {
  theme: ThemePropType,
};

Drop.defaultProps = {
  theme: defaultTheme,
};

Drop.displayName = 'Drop';

export default Drop;
