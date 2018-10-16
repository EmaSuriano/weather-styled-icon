import React from 'react';
import Rays from '../../src/components/Rays';
import { renderWithTheme } from '../utils';

describe('<Rays />', () => {
  it('should should render div with theme', () => {
    const wrapper = renderWithTheme(<Rays />);

    expect(wrapper).toMatchSnapshot();
  });
});
