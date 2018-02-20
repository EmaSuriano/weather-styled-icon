import React from 'react';
import styled from 'styled-components';
import { linkTo } from '@storybook/addon-links';
import { Sunny, Rain, Snow, Cloudy } from '../src';

const WelcomeContainer = styled.div`
  margin: 15px;
  max-width: 600px;
  line-height: 1.4;
  font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans,
    sans-serif;
`;

const WelcomeStoryBook = () => (
  <WelcomeContainer>
    <Sunny />
    <Cloudy />
    <Rain />
    <Snow />
    <h1>Welcome to Weather Styled Icon!</h1>
    <p>This a collection of weather icons built with React</p>

    <h2>Why using it?</h2>
    <ul>
      <li>Weather configurable by props</li>
      <li>Powered by styled-components</li>
      <li>Animated only with CSS3</li>
    </ul>
  </WelcomeContainer>
);

export default WelcomeStoryBook;
