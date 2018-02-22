import styled from 'styled-components';
import PropTypes from 'prop-types';

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
  theme: PropTypes.shape({
    backgroundColor: PropTypes.string,
  }),
};

WeatherContainer.displayName = 'WeatherContainer';

export default WeatherContainer;
