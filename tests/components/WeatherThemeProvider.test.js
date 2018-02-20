import React from 'react';
import { shallow } from 'enzyme';
import WeatherThemeProvider from '../../src/components/WeatherThemeProvider';
import { defaultTheme } from '../../src/constants';

describe('<WeatherThemeProvider />', () => {
  const Children = () => <p>Children!</p>;
  it('should render ThemeProvider with new theme', () => {
    const newTheme = {
      sunColor: 'black',
      raysColor: 'blue',
    };
    const wrapper = shallow(
      <WeatherThemeProvider theme={newTheme}>
        <Children />
      </WeatherThemeProvider>,
    );

    const themeProvider = wrapper.find('ThemeProvider');

    expect(themeProvider.exists()).toBe(true);
    expect(themeProvider.prop('theme')).toEqual(
      expect.objectContaining(newTheme),
    );
    expect(themeProvider.find(Children).exists()).toBe(true);
  });

  it('should render ThemeProvider with defaultTheme', () => {
    const wrapper = shallow(
      <WeatherThemeProvider>
        <Children />
      </WeatherThemeProvider>,
    );

    const themeProvider = wrapper.find('ThemeProvider');

    expect(themeProvider.exists()).toBe(true);
    expect(themeProvider.prop('theme')).toEqual(defaultTheme);
    expect(themeProvider.find(Children).exists()).toBe(true);
  });
});
