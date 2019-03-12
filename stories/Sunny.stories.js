import React from 'react';
import { Sunny } from '../src';
import { createWeatherStory } from './utils';

const theme = {
  sunColor: 'SkyBlue',
  raysColor: 'SlateBlue',
  backgroundColor: 'peachPuff',
};

createWeatherStory('Sunny', theme)
  .add('Default', () => <Sunny />)
  .add('Different sizes', () => [<Sunny size="0.5" />, <Sunny />, <Sunny size="1.5" />]);
