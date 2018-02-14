import React from 'react';
import styled from 'styled-components';

const Section = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  width: 100%;
`;

export default Section;
