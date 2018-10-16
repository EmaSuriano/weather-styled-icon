import React from 'react';
import Bolt from '../../src/components/Bolt';
import { renderWithTheme } from '../utils';

describe('<Bolt />', () => {
  it('should should render div with theme', () => {
    const tree = renderWithTheme(<Bolt />);
    expect(tree).toMatchSnapshot();
  });

  xit('BoltAnimation should return keyframes with theme', () => {
    // TODO: Find a proper way to test Animations!
  });
});
