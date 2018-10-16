import React from 'react';
import { Rain } from '../src';
import { mountWithTheme } from './utils';

describe('<Rain />', () => {
  it('should render Icon with size', () => {
    const wrapper = mountWithTheme(<Rain size={2} />);
    const icon = wrapper.find('[data-e2e="icon"]');

    expect(icon).toHaveLength(1);
    expect(icon.prop('size')).toBe(2);
  });

  it('should render Cloud with Drops when lighting is false', () => {
    const wrapper = mountWithTheme(<Rain />);
    expect(wrapper.find('[data-e2e="cloud"]')).toHaveLength(1);
    expect(wrapper.find('[data-e2e="drop"]')).toHaveLength(1);
  });

  it('should render Cloud with Lighting when lighting is true', () => {
    const wrapper = mountWithTheme(<Rain lighting />);
    expect(wrapper.find('[data-e2e="cloud"]')).toHaveLength(1);
    expect(wrapper.find('[data-e2e="bolt"]')).toHaveLength(2);
  });

  it('should render Cloud and Sun when patchy is true', () => {
    const wrapper = mountWithTheme(<Rain patchy />);

    expect(wrapper.find('[data-e2e="cloud"]')).toHaveLength(1);
    expect(wrapper.find('[data-e2e="sun-phere"]')).toHaveLength(1);
  });
});
