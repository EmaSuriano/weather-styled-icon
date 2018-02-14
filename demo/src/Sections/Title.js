import React from 'react';
import Section from './Section';
import { Cloudy } from 'lib';
import palette from './palette';

const backgroundColor = palette.honeyDrew;

const Title = () => (
  <Section backgroundColor={backgroundColor}>
    <h1>Weather Styled Icons</h1>
    <Cloudy patchy theme={{ backgroundColor }} />
  </Section>
);

export default Title;
