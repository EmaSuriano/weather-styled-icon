import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import Cloud from '../../src/components/Cloud';
import defaultTheme from '../../src/constants/defaultTheme';

describe('<Cloud />', () => {
  it('should should render div with theme', () => {
    const tree = renderer.create(<Cloud theme={defaultTheme} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
