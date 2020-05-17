import React from 'react';
import { Sunny, WeatherThemeProvider } from '../src';
import Center from './helpers/Center';

export default {
  title: 'Sunny',
  component: Sunny,
  decorators: [storyFn => <Center>{storyFn()}</Center>],
};

export const Variations = () => (
  <>
    <Sunny />
  </>
);

export const DifferentSizes = () => (
  <>
    <Sunny size={0.7} />
    <Sunny />
    <Sunny size={1.3} />
  </>
);

export const Theming = () => {
  const theme = {
    sunColor: 'SkyBlue',
    raysColor: 'SlateBlue',
  };

  return (
    <WeatherThemeProvider theme={theme}>
      <Variations />
    </WeatherThemeProvider>
  );
};
