import React from 'react';
import WeatherContainer from '../../src/components/WeatherContainer';
import { renderWithTheme } from '../utils';

describe('<WeatherContainer />', () => {
  it('should should render div with theme', () => {
    const wrapper = renderWithTheme(<WeatherContainer />);

    expect(wrapper).toMatchSnapshot();
  });
});
