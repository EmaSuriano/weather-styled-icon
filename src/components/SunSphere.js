import styled from 'styled-components';
import { ThemePropType, defaultTheme } from '../constants';
import Spin from './animations/Spin';

const SunSphere = styled.div.attrs({
  'data-e2e': 'sun-phere',
  'data-animation': true,
})`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 2.5em;
  height: 2.5em;
  background: ${({ theme }) => theme.backgroundColor};
  margin: -1.25em;
  border-radius: 50%;
  box-shadow: 0 0 0 0.375em ${({ theme }) => theme.sunColor};
  animation: ${Spin} 12s infinite linear;
`;

SunSphere.propTypes = {
  theme: ThemePropType,
};

SunSphere.defaultProps = {
  theme: defaultTheme,
};

SunSphere.displayName = 'SunSphere';

export default SunSphere;
