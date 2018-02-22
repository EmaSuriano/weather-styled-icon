import React from 'react';
import Sun from '../../src/components/Sun';
import { shallow } from 'enzyme';

describe('<Sun />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Sun size={1} />);
  });

  it('should render Icon with size', () => {
    const icon = wrapper.find('Icon');

    expect(icon.exists()).toBe(true);
    expect(icon.prop('size')).toBe(1);
  });

  it('should render SunSphere', () => {
    expect(wrapper.find('SunSphere').exists()).toBe(true);
  });

  it('should render Rays', () => {
    expect(wrapper.find('Rays').exists()).toBe(true);
  });
});
