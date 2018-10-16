import React from 'react';
import Icon from '../../src/components/Icon';
import { renderWithTheme } from '../utils';

describe('<Icon />', () => {
  it('should render WeatherContainer', () => {
    const wrapper = renderWithTheme(<Icon size={1} />);

    expect(wrapper).toMatchSnapshot();
  });
});
