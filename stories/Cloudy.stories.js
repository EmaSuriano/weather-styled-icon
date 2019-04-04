import React from 'react';
import { storiesOf } from '@storybook/react';
import { Cloudy } from '../src';
import { CenterContainer, ThemeContainer } from './utils';

const theme = {
  cloudsColor: 'greenYellow',
  backgroundColor: 'honeyDew',
  sunColor: 'Orange',
  raysColor: 'OrangeRed',
};

storiesOf('Cloudy', module)
  .add('Variations', () => (
    <CenterContainer>
      <Cloudy />
      <Cloudy patchy />
    </CenterContainer>
  ))
  .add('Theming', () => (
    <ThemeContainer theme={theme}>
      <Cloudy />
      <Cloudy patchy />
    </ThemeContainer>
  ));
