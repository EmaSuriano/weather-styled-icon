import { keyframes } from 'styled-components';

const Pan = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    opacity: 0;
    transform: scale(0.5) translate(-200%, -3em);
  }
`;

export default Pan;
