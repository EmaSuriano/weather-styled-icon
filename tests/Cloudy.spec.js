// import React from 'react';
// import { Cloudy } from '../src';
// import { mountWithTheme } from './utils';

// describe('<Cloudy />', () => {
//   it('should render Icon with size', () => {
//     const wrapper = mountWithTheme(<Cloudy size={2} />);
//     const icon = wrapper.find('[data-e2e="icon"]');

//     expect(icon.exists()).toBe(true);
//     expect(icon.prop('size')).toBe(2);
//   });

//   it('should render 2 Cloud components when patchy is false', () => {
//     const wrapper = mountWithTheme(<Cloudy />);

//     expect(wrapper.find('[data-e2e="cloud"]')).toHaveLength(2);
//     expect(wrapper.find('[data-e2e="sun-phere"]')).toHaveLength(0);
//   });

//   it('should render Cloud and Sun when patchy is true', () => {
//     const wrapper = mountWithTheme(<Cloudy patchy />);

//     expect(wrapper.find('[data-e2e="cloud"]')).toHaveLength(1);
//     expect(wrapper.find('[data-e2e="sun-phere"]')).toHaveLength(1);
//   });
// });
