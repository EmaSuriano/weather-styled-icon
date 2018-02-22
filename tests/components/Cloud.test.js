import React from 'react';
import Cloud from '../../src/components/Cloud';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('<Cloud />', () => {
  it('should should render div with theme', () => {
    const wrapper = shallow(
      <Cloud theme={{ cloudsColor: 'yellow', backgroundColor: 'red' }} />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
