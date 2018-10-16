import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../src/constants/defaultTheme';
import 'jest-styled-components';

const renderWithTheme = component =>
  renderer
    .create(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>)
    .toJSON();

const mountWithTheme = component =>
  mount(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>);

export { renderWithTheme, mountWithTheme };
