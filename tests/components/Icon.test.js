import React from 'react';
import Icon from '../../src/components/Icon';
import { shallow } from 'enzyme';

describe('<Icon />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Icon />);
  });

  it('should render WeatherContainer', () => {
    const wrapper = shallow(<Icon size={1} />);

    expect(wrapper).toMatchSnapshot();
  });
});
