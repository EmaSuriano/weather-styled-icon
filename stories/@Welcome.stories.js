import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import { Sunny, Rain, Snow, Cloudy } from '../src';

const WelcomeContainer = styled.div`
  margin: 15px;
  line-height: 1.4;
  font-family: 'Helvetica Neue', Helvetica, 'Segoe UI', Arial, freesans, sans-serif;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

storiesOf('@Welcome', module).add('to Weather Styled Icon', () => (
  <WelcomeContainer>
    <div>
      <Sunny />
      <Cloudy />
      <Rain />
      <Snow />
    </div>

    <h1>Welcome to Weather Styled Icon!</h1>
    <p>This a collection of weather icons built with React</p>

    <h2>Why using it?</h2>
    <p>
      Because they are nice and clean{' '}
      <span role="img" aria-label="heart">
        😍
      </span>{' '}
      Beside that, by using them you get:{' '}
    </p>
    <ul>
      <li>Weather Icons configurable by props</li>
      <li>Powered by styled-components</li>
      <li>Animated only with CSS3</li>
    </ul>

    <p>Please navigate between them and check all the variations</p>
  </WelcomeContainer>
));
