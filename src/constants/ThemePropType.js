import PropTypes from 'prop-types';

const ThemePropType = PropTypes.shape({
  sunColor: PropTypes.string,
  raysColor: PropTypes.string,
  cloudsColor: PropTypes.string,
  dropsColor: PropTypes.string,
  snowColor: PropTypes.string,
  boltColor: PropTypes.string,
  backgroundColor: PropTypes.string,
});

export default ThemePropType;
