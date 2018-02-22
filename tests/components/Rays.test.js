import React from 'react';
import Rays from '../../src/components/Rays';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('<Rays />', () => {
  it('should should render div with theme', () => {
    const wrapper = shallow(<Rays theme={{ raysColor: 'yellow' }} />);

    expect(wrapper).toMatchSnapshot();
  });
});
