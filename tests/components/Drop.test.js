import React from 'react';
import Drop from '../../src/components/Drop';
import { renderWithTheme } from '../utils';

describe('<Drop />', () => {
  it('should should render div with theme', () => {
    const wrapper = renderWithTheme(<Drop />);

    expect(wrapper).toMatchSnapshot();
  });

  xit('DropAnimation should return keyframes with theme', () => {
    // TOOD: Find a proper way to test Animations!
  });
});
