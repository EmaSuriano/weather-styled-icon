import React from 'react';
import { shallow } from 'enzyme';
import { Cloudy } from '../src';

describe('<Cloudy />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Cloudy theme={{ cloudsColor: 'white' }} size={2} />);
  });
  it('should render Icon with size', () => {
    const icon = wrapper.find('Icon');

    expect(icon.exists()).toBe(true);
    expect(icon.prop('size')).toBe(2);
  });

  it('should render 2 Cloud components when patchy is false', () => {
    const clouds = wrapper.find('Cloud');
    const sun = wrapper.find('Sun');

    expect(clouds).toHaveLength(2);
    expect(sun).toHaveLength(0);
  });

  it('should render Cloud and Sun when patchy is true', () => {
    wrapper.setProps({ patchy: true });
    const clouds = wrapper.find('Cloud');
    const sun = wrapper.find('Sun');

    expect(clouds).toHaveLength(1);
    expect(sun).toHaveLength(1);
    expect(sun.prop('onTheSide')).toBe(true);
  });
});
