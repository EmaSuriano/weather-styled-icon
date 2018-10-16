import React from 'react';
import { Snow } from '../src';
import { mountWithTheme } from './utils';

describe('<Snow />', () => {
  it('should render Icon with size', () => {
    const wrapper = mountWithTheme(<Snow size={2} />);
    const icon = wrapper.find('[data-e2e="icon"]');

    expect(icon.exists()).toBe(true);
    expect(icon.prop('size')).toBe(2);
  });

  it('should render Cloud with Snowing when lighting is false', () => {
    const wrapper = mountWithTheme(<Snow size={2} />);

    expect(wrapper.find('[data-e2e="cloud"]').exists()).toBe(true);
    expect(wrapper.find('[data-e2e="flake"]').exists()).toBe(true);
  });

  it('should render Cloud and Sun when patchy is true', () => {
    const wrapper = mountWithTheme(<Snow patchy size={2} />);

    expect(wrapper.find('[data-e2e="cloud"]')).toHaveLength(1);
    expect(wrapper.find('[data-e2e="sun-phere"]').exists()).toBe(true);
  });
});
