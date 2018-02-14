import expect from 'expect';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import { Cloudy } from 'lib';

describe('<Cloudy />', () => {
  let node;

  beforeEach(() => {
    node = shallow(<Cloudy />);
  });

  it('displays a welcome message', () => {
    expect(node).toExist();
    expect(true).toBe(true);
  });
});
