import React from 'react';
import SunSphere from '../../src/components/SunSphere';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('<SunSphere />', () => {
  const theme = {
    sunColor: 'red',
    backgroundColor: 'white',
  };

  it('should render div with theme', () => {
    const wrapper = shallow(<SunSphere theme={theme} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render with margin when onTheSide is true', () => {
    const wrapper = shallow(<SunSphere theme={theme} onTheSide />);
    expect(wrapper).toMatchSnapshot();
  });

  xit('Spin should return keyframes with theme', () => {
    // TOOD: Find a proper way to test Animations!
  });
});
