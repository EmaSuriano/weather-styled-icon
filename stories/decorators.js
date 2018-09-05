import React from 'react';
import styled from 'styled-components';
import { WeatherThemeProvider } from '../src';

const CenteredContainer = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const centeredDecorator = story => (
  <CenteredContainer>{story()}</CenteredContainer>
);

const BackgroundContainer = styled.div`
  background-color: ${props => props.color};
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const themeDecorator = theme => story => (
  <BackgroundContainer color={theme.backgroundColor}>
    <WeatherThemeProvider theme={theme}>{story()}</WeatherThemeProvider>
  </BackgroundContainer>
);
