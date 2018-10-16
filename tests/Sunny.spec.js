import React from 'react';
import { Sunny } from '../src';
import { mountWithTheme } from './utils';

describe('<Sunny />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mountWithTheme(<Sunny size={1} />);
  });

  it('should render Icon with size', () => {
    const icon = wrapper.find('[data-e2e="icon"]');

    expect(icon.exists()).toBe(true);
    expect(icon.prop('size')).toBe(1);
  });

  it('should render SunSphere', () => {
    expect(wrapper.find('[data-e2e="sun-phere"]').exists()).toBe(true);
  });

  it('should render Rays', () => {
    expect(wrapper.find('[data-e2e="rays"]').exists()).toBe(true);
  });
});
