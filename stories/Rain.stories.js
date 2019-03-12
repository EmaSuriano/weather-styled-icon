import React from 'react';
import { Rain } from '../src';
import { createWeatherStory } from './utils';

const theme = {
  cloudsColor: 'MidnightBlue',
  dropsColor: 'white',
  boltColor: 'lightBlue',
  backgroundColor: 'Lavender',
  sunColor: 'Orange',
  raysColor: 'OrangeRed',
};

createWeatherStory('Rain', theme)
  .add('Default', () => <Rain />)
  .add('Different sizes', () => [<Rain size="0.5" />, <Rain />, <Rain size="1.5" />])
  .add('Patchy', () => <Rain patchy />)
  .add('Lighting', () => <Rain lighting />)
  .add('Lighting patchy', () => <Rain lighting patchy />);
