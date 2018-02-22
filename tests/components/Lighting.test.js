import React from 'react';
import Lighting from '../../src/components/Lighting';
import { shallow } from 'enzyme';

describe('<Lighting />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Lighting />);
  });

  it('should render WeatherContainer', () => {
    expect(wrapper.find('WeatherContainer').exists()).toBe(true);
  });

  it('should render Bolt', () => {
    expect(wrapper.find('Bolt')).toHaveLength(2);
  });
});
