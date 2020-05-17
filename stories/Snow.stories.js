import React from 'react';
import { Snow, WeatherThemeProvider } from '../src';
import Center from './helpers/Center';

export default {
  title: 'Snow',
  component: Snow,
  decorators: [storyFn => <Center>{storyFn()}</Center>],
};

export const Variations = () => (
  <>
    <Snow />
    <Snow patchy />
  </>
);

export const DifferentSizes = () => (
  <>
    <Snow size={0.7} />
    <Snow />
    <Snow size={1.3} />
  </>
);

export const Theming = () => {
  const theme = {
    cloudsColor: 'RoyalBlue ',
    snowColor: 'SeaGreen ',
    sunColor: 'Purple',
    raysColor: 'RebeccaPurple',
  };

  return (
    <WeatherThemeProvider theme={theme}>
      <Variations />
    </WeatherThemeProvider>
  );
};
