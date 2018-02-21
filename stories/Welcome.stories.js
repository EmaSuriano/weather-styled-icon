import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
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
    <Sunny size="0.9" />
    <Cloudy size="0.9" />
    <Rain size="0.9" />
    <Snow size="0.9" />

    <h1>Welcome to Weather Styled Icon!</h1>
    <p>This a collection of weather icons built with React</p>

    <h2>Why using it?</h2>
    <p>
      Because they are nice and clean{' '}
      <span role="img" aria-label="hear">
        😍
      </span>{' '}
      Beside that, by using them you get:{' '}
    </p>
    <ul>
      <li>Weather Icons configurable by props</li>
      <li>Powered by styled-components</li>
      <li>Animated only with CSS3</li>
    </ul>

    <p>Please navigate between them and check all the variations of them</p>
  </WelcomeContainer>
);

storiesOf('@Welcome', module).add('to Weather Styled Icon', () => (
  <WelcomeStoryBook />
));
