import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  background-color: ${props => props.color};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

BackgroundContainer.displayName = 'BackgroundContainer';

export const CenteredContainer = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

CenteredContainer.displayName = 'CenteredContainer';
