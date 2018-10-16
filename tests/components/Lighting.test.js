import React from 'react';
import Lighting from '../../src/components/Lighting';
import { mountWithTheme } from '../utils';

describe('<Lighting />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(<Lighting />);
  });

  it('should render WeatherContainer', () => {
    expect(wrapper.find('[data-e2e="weather-container"]').exists()).toBe(true);
  });

  it('should render Bolt', () => {
    expect(wrapper.find('[data-e2e="bolt"]')).toHaveLength(2);
  });
});
