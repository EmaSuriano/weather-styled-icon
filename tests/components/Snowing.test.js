import React from 'react';
import Snowing from '../../src/components/Snowing';
import { shallow } from 'enzyme';

describe('<Snowing />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Snowing />);
  });

  it('should render WeatherContainer', () => {
    expect(wrapper.find('WeatherContainer').exists()).toBe(true);
  });

  it('should render Flake', () => {
    expect(wrapper.find('Flake')).toHaveLength(2);
  });
});
