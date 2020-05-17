import React from 'react';
import { Cloudy, WeatherThemeProvider } from '../src';
import Center from './helpers/Center';

export default {
  title: 'Cloudy',
  component: Cloudy,
  decorators: [storyFn => <Center>{storyFn()}</Center>],
};

export const Variations = () => (
  <>
    <Cloudy />
    <Cloudy patchy />
  </>
);

export const DifferentSizes = () => (
  <>
    <Cloudy size={0.7} />
    <Cloudy />
    <Cloudy size={1.3} />
  </>
);

export const Theming = () => {
  const theme = {
    cloudsColor: 'greenYellow',
    sunColor: 'Orange',
    raysColor: 'OrangeRed',
  };

  return (
    <WeatherThemeProvider theme={theme}>
      <Variations />
    </WeatherThemeProvider>
  );
};
