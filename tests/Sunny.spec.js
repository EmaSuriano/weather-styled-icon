import React from 'react';
import { Sunny } from '../src';
import { shallow } from 'enzyme';

describe('<Sunny />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Sunny size={1} />);
  });

  it('should render Icon with size', () => {
    const icon = wrapper.find('Icon');

    expect(icon.exists()).toBe(true);
    expect(icon.prop('size')).toBe(1);
  });

  it('should render SunnySphere', () => {
    expect(wrapper.find('SunSphere').exists()).toBe(true);
  });

  it('should render Rays', () => {
    expect(wrapper.find('Rays').exists()).toBe(true);
  });
});
