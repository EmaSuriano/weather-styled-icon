import React from 'react';
import { shallow } from 'enzyme';
import { Snow } from '../src';

describe('<Snow />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Snow theme={{ cloudsColor: 'white' }} size={2} />);
  });

  it('should render Icon with size', () => {
    const icon = wrapper.find('Icon');

    expect(icon.exists()).toBe(true);
    expect(icon.prop('size')).toBe(2);
  });

  it('should render Cloud with Snowing when lighting is false', () => {
    expect(wrapper.find('Cloud').exists()).toBe(true);
    expect(wrapper.find('Snowing').exists()).toBe(true);
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
