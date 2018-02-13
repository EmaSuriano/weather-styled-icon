import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { Cloudy, Sunny, Rain, Snow } from '../../src';

// Apply theme colors https://coolors.co/e63946-f1faee-a8dadc-457b9d-1d3557

const Container = styled.div`
  display: flex;
  justify-content: ${props => props.justifyContent || 'center'};
  flex-direction: ${props => props.direction || 'column'};
  align-items: center;
  text-align: center;
`;

const Section = styled.div`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  width: 100%;
`;

const NavBar = () => (
  <Section>
    <FontAwesome name="github" />
    <FontAwesome name="download" />
  </Section>
);

const TitleSection = () => (
  <Section backgroundColor="white">
    <h1>Weather Styled Icons</h1>
    <Cloudy patchy />
  </Section>
);

const Installation = () => (
  <Section>
    <h1>Installing</h1>
    <p>npm install weather-styled-icons</p>
  </Section>
);

const InAction = () => (
  <Section>
    <h1>In action</h1>
    <p>import sunny from laksjdlkasjdlkasjd</p>
  </Section>
);

const Customization = () => (
  <Section backgroundColor="#1D3557" color="#F1FAEE">
    <h2>Customizable weather icons by props</h2>
    <Container direction="row" justifyContent="space-around">
      <Section>
        <p>Basic component</p>
        <Rain theme={{ backgroundColor: '#1D3557' }} />
      </Section>
      <Section>
        <p>Customized component</p>
        <Rain lighting patchy theme={{ backgroundColor: '#1D3557' }} />
      </Section>
    </Container>
  </Section>
);

const Theming = () => (
  <Section backgroundColor="#A8DADC">
    <h2>Theming is easy with styled-components</h2>

    <Snow
      theme={{
        backgroundColor: '#A8DADC',
        cloudsColor: '#1abc9c',
        snowColor: '#3498db',
      }}
    />
    <Snow
      theme={{
        backgroundColor: '#A8DADC',
        cloudsColor: '#9b59b6',
        snowColor: '#34495e',
      }}
    />

    <Snow
      theme={{
        backgroundColor: '#A8DADC',
        cloudsColor: '#e67e22',
        snowColor: '#c0392b',
      }}
    />
    <Snow
      theme={{
        backgroundColor: '#A8DADC',
        cloudsColor: '#ecf0f1',
        snowColor: '#95a5a6',
      }}
    />
  </Section>
);

const App = () => (
  <Container>
    <NavBar />
    <TitleSection />
    <Installation />
    <InAction />
    <Customization />
    <Theming />
  </Container>
);

export default App;
