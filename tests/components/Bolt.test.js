import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import Bolt from '../../src/components/Bolt';
import defaultTheme from '../../src/constants/defaultTheme';

describe('<Bolt />', () => {
  it('should should render div with theme', () => {
    const tree = renderer.create(<Bolt theme={defaultTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  xit('BoltAnimation should return keyframes with theme', () => {
    // TODO: Find a proper way to test Animations!
  });
});
