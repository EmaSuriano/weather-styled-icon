import React from 'react';
import { Snow } from '../src';
import { createWeatherStory } from './utils';

const theme = {
  cloudsColor: 'RoyalBlue ',
  snowColor: 'SeaGreen ',
  backgroundColor: 'PaleGoldenRod',
  sunColor: 'Purple',
  raysColor: 'RebeccaPurple',
};

createWeatherStory('Snow', theme)
  .add('Default', () => <Snow />)
  .add('Different sizes', () => [
    <Snow size="0.5" />,
    <Snow />,
    <Snow size="1.5" />,
  ])
  .add('Patchy', () => <Snow patchy />);
