import React from 'react';
import Drops from '../../src/components/Drops';
import { mountWithTheme } from '../utils';

describe('<Drops />', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mountWithTheme(<Drops />);
  });

  it('should render WeatherContainer', () => {
    expect(wrapper.find('[data-e2e="weather-container"]').exists()).toBe(true);
  });

  it('should render Drop', () => {
    expect(wrapper.find('[data-e2e="weather-container"]').exists()).toBe(true);
  });
});
