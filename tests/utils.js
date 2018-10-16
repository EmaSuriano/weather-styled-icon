import React from 'react';
import 'jest-styled-components';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import defaultTheme from '../src/constants/defaultTheme';

const renderWithTheme = component => renderer.create(<ThemeProvider theme={defaultTheme}>{component}</ThemeProvider>).toJSON();

export { renderWithTheme };
