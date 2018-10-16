import React from 'react';
import Flake from '../../src/components/Flake';
import { renderWithTheme } from '../utils';

describe('<Flake />', () => {
  it('should should render div with theme', () => {
    const wrapper = renderWithTheme(<Flake />);

    expect(wrapper).toMatchSnapshot();
  });

  xit('Spin should return keyframes with theme', () => {
    // TOOD: Find a proper way to test Animations!
  });
});
