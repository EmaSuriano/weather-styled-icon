import React from 'react';
import { shallow } from 'enzyme';
import { Cloudy } from '../src';

describe('<Cloudy />', () => {
  let node;

  beforeEach(() => {
    node = shallow(<Cloudy />);
  });

  it('displays a welcome message', () => {
    expect(node.exists()).toBe(true);
  });
});
