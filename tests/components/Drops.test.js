import React from 'react';
import Drops from '../../src/components/Drops';
import { shallow } from 'enzyme';

describe('<Drops />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Drops />);
  });

  it('should render WeatherContainer', () => {
    expect(wrapper.find('WeatherContainer').exists()).toBe(true);
  });

  it('should render Drop', () => {
    expect(wrapper.find('Drop').exists()).toBe(true);
  });
});
