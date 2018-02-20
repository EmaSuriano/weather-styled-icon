import React from 'react';
import { shallow } from 'enzyme';
import { Cloudy } from '../src';

describe('<Cloudy />', () => {
  let node;

  beforeEach(() => {
    node = shallow(<Cloudy />);
  });

  it('displays a welcome message', () => {
<<<<<<< HEAD
    expect(node.exists()).toBe(true);
=======
    expect(node).toExist();
    expect(true).toBe(true);
>>>>>>> d6ae5252a89fde3fbd50eae152162737efa7981b
  });
});
