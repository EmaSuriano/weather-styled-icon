import React from 'react';
import Section from './Section';
import palette from './palette';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { ocean } from 'react-syntax-highlighter/styles/hljs';

const Installation = () => (
  <Section backgroundColor={palette.honeyDrew}>
    <h1>Installing</h1>
    <SyntaxHighlighter language="javascript" style={ocean}>
      npm install weather-styled-icons
    </SyntaxHighlighter>
  </Section>
);

export default Installation;
