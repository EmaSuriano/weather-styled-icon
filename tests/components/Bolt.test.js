import React from 'react';
import Bolt, { BoltAnimation } from '../../src/components/Bolt';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('<Bolt />', () => {
  const theme = { boltColor: 'yellow ' };

  it('should should render div with theme', () => {
    const wrapper = shallow(<Bolt theme={theme} />);

    expect(wrapper).toMatchSnapshot();
  });

  xit('BoltAnimation should return keyframes with theme', () => {
    // TOOD: Find a proper way to test Animations!
  });
});
