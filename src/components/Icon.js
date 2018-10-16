import styled from 'styled-components';
import PropTypes from 'prop-types';

const Icon = styled.div.attrs({
  'data-e2e': 'icon',
})`
  position: relative;
  display: inline-block;
  height: 10em;
  width: 10em;
  font-size: ${({ size }) => `${size}em`};
`;

Icon.displayName = 'Icon';

Icon.propTypes = {
  size: PropTypes.number,
};

Icon.defaultProps = {
  size: 1,
};

export default Icon;
