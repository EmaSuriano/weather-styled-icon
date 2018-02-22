import React from 'react';
import WeatherContainer from '../../src/components/WeatherContainer';
import { shallow } from 'enzyme';
import 'jest-styled-components';

describe('<WeatherContainer />', () => {
  it('should should render div with theme', () => {
    const wrapper = shallow(
      <WeatherContainer theme={{ backgroundColor: 'red' }} />,
    );

    expect(wrapper).toMatchSnapshot();
  });
});
