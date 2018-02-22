import React from 'react';
import Drop, { DropAnimation } from '../../src/components/Drop';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('<Cloud />', () => {
  const theme = {
    dropsColor: 'blue',
  };

  it('should should render div with theme', () => {
    const wrapper = shallow(<Drop theme={theme} />);

    expect(wrapper).toMatchSnapshot();
  });

  it('DropAnimation should return keyframes with theme', () => {
    // TOOD: Find a proper way to test Animations!
  });
});
