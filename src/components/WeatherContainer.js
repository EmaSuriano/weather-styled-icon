import styled from 'styled-components';
import { ThemePropType, defaultTheme } from '../constants';

const WeatherContainer = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  width: 3.75em;
  height: 3.75em;
  margin: 0.375em 0 0 -2em;
  background: ${props => props.theme.backgroundColor};
`;

WeatherContainer.propTypes = {
  theme: ThemePropType,
};

WeatherContainer.defaultProps = {
  theme: defaultTheme,
};

WeatherContainer.displayName = 'WeatherContainer';

export default WeatherContainer;
