import React from 'react';
import { storiesOf } from '@storybook/react';
import { Snow } from '../src';
import { CenterContainer, ThemeContainer } from './utils';

const theme = {
  cloudsColor: 'RoyalBlue ',
  snowColor: 'SeaGreen ',
  backgroundColor: 'PaleGoldenRod',
  sunColor: 'Purple',
  raysColor: 'RebeccaPurple',
};

storiesOf('Snow', module)
  .add('Variations', () => (
    <CenterContainer>
      <Snow />
    </CenterContainer>
  ))
  .add('Theming', () => (
    <ThemeContainer theme={theme}>
      <Snow />
      <Snow patchy />
    </ThemeContainer>
  ));
