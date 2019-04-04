import React from 'react';
import { Sunny } from '../src';
import { storiesOf } from '@storybook/react';
import { CenterContainer, ThemeContainer } from './utils';

const theme = {
  sunColor: 'SkyBlue',
  raysColor: 'SlateBlue',
  backgroundColor: 'peachPuff',
};

storiesOf('Sunny', theme)
  .add('Variations', () => (
    <CenterContainer>
      <Sunny />
    </CenterContainer>
  ))
  .add('Theming', () => (
    <ThemeContainer theme={theme}>
      <Sunny />
    </ThemeContainer>
  ));
