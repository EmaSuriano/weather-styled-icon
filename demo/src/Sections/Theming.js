import React from 'react';
import Section from './Section';
import palette from './palette';
import { Snow } from 'lib';

const backgroundColor = palette.spaceCadet;

const Theming = () => (
  <Section backgroundColor={backgroundColor} color={palette.honeyDrew}>
    <h2>Theming is easy with styled-components</h2>
    <Snow
      theme={{
        backgroundColor,
        cloudsColor: '#1abc9c',
        snowColor: '#3498db',
      }}
    />
    <Snow
      theme={{
        backgroundColor,
        cloudsColor: '#E63946',
        snowColor: '#E63946',
      }}
    />
    <Snow
      theme={{
        backgroundColor,
        cloudsColor: '#e67e22',
        snowColor: '#c0392b',
      }}
    />
    <Snow
      theme={{
        backgroundColor,
        cloudsColor: '#ecf0f1',
        snowColor: '#95a5a6',
      }}
    />
  </Section>
);

export default Theming;
