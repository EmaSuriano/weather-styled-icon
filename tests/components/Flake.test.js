import React from 'react';
import Flake from '../../src/components/Flake';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('<Flake />', () => {
  const theme = {
    snowColor: 'white',
  };

  it('should should render div with theme', () => {
    const wrapper = shallow(<Flake theme={theme} />);

    expect(wrapper).toMatchSnapshot();
  });

  xit('Spin should return keyframes with theme', () => {
    // TOOD: Find a proper way to test Animations!
  });
});
