import expect from 'expect';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
import Component from 'src/';

describe('Component', () => {
  let node;

  beforeEach(() => {
    node = shallow(<Component />);
  });

  it('displays a welcome message', () => {
    expect(true).toNotEqual(true);
  });
});
