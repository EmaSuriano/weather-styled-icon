import React from 'react';
import SunSphere from '../../src/components/SunSphere';
import { renderWithTheme } from '../utils';

describe('<SunSphere />', () => {
  it('should render div with theme', () => {
    const wrapper = renderWithTheme(<SunSphere />);

    expect(wrapper).toMatchSnapshot();
  });

  xit('Spin should return keyframes with theme', () => {
    // TOOD: Find a proper way to test Animations!
  });
});
