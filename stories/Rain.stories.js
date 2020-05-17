import React from 'react';
import { Rain, WeatherThemeProvider } from '../src';
import Center from './helpers/Center';

export default {
  title: 'Rain',
  component: Rain,
  decorators: [storyFn => <Center>{storyFn()}</Center>],
};

export const Variations = () => (
  <>
    <Rain />
    <Rain patchy />
    <Rain lighting />
    <Rain lighting patchy />
  </>
);

export const DifferentSizes = () => (
  <>
    <Rain size={0.7} />
    <Rain />
    <Rain size={1.3} />
  </>
);

export const Theming = () => {
  const theme = {
    cloudsColor: 'MidnightBlue',
    dropsColor: 'white',
    boltColor: 'lightBlue',
    sunColor: 'Orange',
    raysColor: 'OrangeRed',
  };

  return (
    <WeatherThemeProvider theme={theme}>
      <Variations />
    </WeatherThemeProvider>
  );
};
