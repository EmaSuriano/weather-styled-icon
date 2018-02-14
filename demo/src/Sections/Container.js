import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  flex-direction: ${props => props.direction || 'column'};
  align-items: center;
  text-align: center;
`;

export default Container;
