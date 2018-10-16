import React from 'react';
import Cloud from '../../src/components/Cloud';
import { renderWithTheme } from '../utils';

describe('<Cloud />', () => {
  it('should should render div with theme', () => {
    const tree = renderWithTheme(<Cloud />);
    expect(tree).toMatchSnapshot();
  });
});
