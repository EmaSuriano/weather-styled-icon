import React from 'react';
import { shallow } from 'enzyme';
import { Sunny } from '../src';

describe('<Sunny />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Sunny theme={{ sunColor: 'red' }} size={2} />);
  });

  it('should render WeatherThemeProvider with theme', () => {
    const weatherThemeProvider = wrapper.find('WeatherThemeProvider');

    expect(weatherThemeProvider.exists()).toBe(true);
    expect(weatherThemeProvider.prop('theme')).toEqual({ sunColor: 'red' });
  });

  it('should render Sun with size', () => {
    const sun = wrapper.find('Sun');

    expect(sun.exists()).toBe(true);
    expect(sun.prop('size')).toBe(2);
  });
});
