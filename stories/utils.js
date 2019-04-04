import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { WeatherThemeProvider } from '../src';
import { ThemePropType } from '../src/constants';

export const CenterContainer = styled.div`
  ${props =>
    props.theme.backgroundColor &&
    `background-color: ${props.theme.backgroundColor}`};
  text-align: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BackgroundContainer = styled(CenterContainer)`
  background-color: ${props => props.color};
`;

export const ThemeContainer = ({ theme, children }) => (
  <WeatherThemeProvider theme={theme}>
    <BackgroundContainer>{children}</BackgroundContainer>
  </WeatherThemeProvider>
);

ThemeContainer.propTypes = {
  theme: ThemePropType.isRequired,
  children: PropTypes.node,
};

ThemeContainer.defaultProps = {
  children: PropTypes.node.isRequired,
};
