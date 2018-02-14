import React from 'react';
import Section from './Section';
import Container from './Container';
import palette from './palette';
import { Rain } from 'lib';

const backgroundColor = palette.lightBlue;

const Customization = () => (
  <Section backgroundColor={backgroundColor}>
    <h2>Customizable weather icons by props</h2>
    <Container direction="row" justifyContent="space-around">
      <Section>
        <p>Basic component</p>
        <Rain theme={{ backgroundColor }} />
      </Section>
      <Section>
        <p>Customized component</p>
        <Rain lighting patchy theme={{ backgroundColor }} />
      </Section>
    </Container>
  </Section>
);

export default Customization;
