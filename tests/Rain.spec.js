import React from 'react';
import { shallow } from 'enzyme';
import { Rain } from '../src';

describe('<Rain />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Rain theme={{ cloudsColor: 'white' }} size={2} />);
  });

  it('should render Icon with size', () => {
    const icon = wrapper.find('Icon');

    expect(icon.exists()).toBe(true);
    expect(icon.prop('size')).toBe(2);
  });

  it('should render Cloud with Drops when lighting is false', () => {
    expect(wrapper.find('Cloud').exists()).toBe(true);
    expect(wrapper.find('Drops').exists()).toBe(true);
  });

  it('should render Cloud with Lighting when lighting is true', () => {
    wrapper.setProps({ lighting: true });
    expect(wrapper.find('Cloud').exists()).toBe(true);
    expect(wrapper.find('Lighting').exists()).toBe(true);
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
