import React from 'react';
import { Sunny } from '../src';
import { storiesOf } from '@storybook/react';
import { CenterContainer, ThemeContainer } from './utils';

const theme = {
  sunColor: 'SkyBlue',
  raysColor: 'SlateBlue',
  backgroundColor: 'peachPuff',
};

storiesOf('Sunny', module)
  .add('Variations', () => (
    <CenterContainer>
      <Sunny />
    </CenterContainer>
  ))
  .add('Different Sizes', () => (
    <CenterContainer>
      <Sunny size={0.7} />
      <Sunny />
      <Sunny size={1.3} />
    </CenterContainer>
  ))
  .add('Theming', () => (
    <ThemeContainer theme={theme}>
      <Sunny />
    </ThemeContainer>
  ));
