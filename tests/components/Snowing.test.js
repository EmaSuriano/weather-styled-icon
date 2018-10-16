import React from 'react';
import Snowing from '../../src/components/Snowing';
import { mountWithTheme } from '../utils';

describe('<Snowing />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(<Snowing />);
  });

  it('should render WeatherContainer', () => {
    expect(wrapper.find('[data-e2e="weather-container"]').exists()).toBe(true);
  });

  it('should render Flake', () => {
    expect(wrapper.find('[data-e2e="flake"]')).toHaveLength(2);
  });
});
