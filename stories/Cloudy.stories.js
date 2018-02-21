import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Cloudy } from '../src';
import { BackgroundContainer, CenteredContainer } from './Container';

storiesOf('Cloudy', module)
  .addDecorator(story => <CenteredContainer>{story()}</CenteredContainer>)
  .addDecorator((story, context) => withInfo('Cloudy')(story)(context))
  .add('default', () => <Cloudy />)
  .add('different sizes', () => [
    <Cloudy size="0.5" />,
    <Cloudy />,
    <Cloudy size="1.5" />,
  ])
  .add('with theme', () => (
    <BackgroundContainer color="honeyDew">
      <Cloudy
        theme={{ cloudsColor: 'greenYellow', backgroundColor: 'honeyDew' }}
      />
    </BackgroundContainer>
  ))
  .add('patchy', () => <Cloudy patchy />)
  .add('patchy with theme', () => (
    <BackgroundContainer color="honeyDew">
      <Cloudy
        patchy
        theme={{
          cloudsColor: 'greenYellow',
          backgroundColor: 'honeyDew',
          sunColor: 'hotPink',
          raysColor: 'indianRed',
        }}
      />
    </BackgroundContainer>
  ));
