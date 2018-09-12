import React from 'react';
import Drop from '../../src/components/Drop';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('<Drop />', () => {
  const theme = {
    dropsColor: 'blue',
  };

  it('should should render div with theme', () => {
    const wrapper = shallow(<Drop theme={theme} />);

    expect(wrapper).toMatchSnapshot();
  });

  xit('DropAnimation should return keyframes with theme', () => {
    // TOOD: Find a proper way to test Animations!
  });
});
