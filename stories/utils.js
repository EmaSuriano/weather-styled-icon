import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import { WeatherThemeProvider } from '../src';
import { withInfo } from '@storybook/addon-info';

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

export const createWeatherStory = (weather, theme) => {
  const createStory = name =>
    storiesOf(name, module)
      .addDecorator((story, context) => withInfo(name)(story)(context))
      .addDecorator(centeredDecorator);

  const story = createStory(weather);

  const storyWithTheme = createStory(`${weather}/themed`).addDecorator(
    themeDecorator(theme),
  );

  function add(...args) {
    story.add(...args);
    storyWithTheme.add(...args);
    return { add };
  }

  return {
    add,
  };
};
