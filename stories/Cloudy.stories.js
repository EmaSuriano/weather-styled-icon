import React from 'react';
import { Cloudy } from '../src';
import { createWeatherStory } from './utils';

const theme = {
  cloudsColor: 'greenYellow',
  backgroundColor: 'honeyDew',
  sunColor: 'Orange',
  raysColor: 'OrangeRed',
};

createWeatherStory('Cloudy', theme)
  .add('Default', () => <Cloudy />)
  .add('Different sizes', () => [
    <Cloudy size="0.5" />,
    <Cloudy />,
    <Cloudy size="1.5" />,
  ])
  .add('Patchy', () => <Cloudy patchy />);
