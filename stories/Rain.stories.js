import React from 'react';
import { storiesOf } from '@storybook/react';
import { Rain } from '../src';
import { CenterContainer, ThemeContainer } from './utils';

const theme = {
  cloudsColor: 'MidnightBlue',
  dropsColor: 'white',
  boltColor: 'lightBlue',
  backgroundColor: 'Lavender',
  sunColor: 'Orange',
  raysColor: 'OrangeRed',
};

storiesOf('Rain', module)
  .add('Variations', () => (
    <CenterContainer>
      <Rain />
      <Rain patchy />
      <Rain lighting />
      <Rain lighting patchy />
    </CenterContainer>
  ))
  .add('Different Sizes', () => (
    <CenterContainer>
      <Rain size={0.7} />
      <Rain />
      <Rain size={1.3} />
    </CenterContainer>
  ))
  .add('Theming', () => (
    <ThemeContainer theme={theme}>
      <Rain />
      <Rain patchy />
      <Rain lighting />
      <Rain lighting patchy />
    </ThemeContainer>
  ));
