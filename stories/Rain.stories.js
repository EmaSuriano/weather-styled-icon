import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Rain } from '../src';
import { BackgroundContainer, CenteredContainer } from './Container';

const backgroundColor = 'Lavender';

storiesOf('Rain', module)
  .addDecorator(story => <CenteredContainer>{story()}</CenteredContainer>)
  .addDecorator((story, context) => withInfo('Rain')(story)(context))
  .add('default', () => <Rain />)
  .add('different sizes', () => [
    <Rain size="0.5" />,
    <Rain />,
    <Rain size="1.5" />,
  ])
  .add('with theme', () => (
    <BackgroundContainer color={backgroundColor}>
      <Rain
        theme={{
          cloudsColor: 'MidnightBlue',
          dropsColor: 'white',
          backgroundColor,
        }}
      />
    </BackgroundContainer>
  ))
  .add('patchy', () => <Rain patchy />)
  .add('patchy with theme', () => (
    <BackgroundContainer color={backgroundColor}>
      <Rain
        patchy
        theme={{
          cloudsColor: 'MidnightBlue',
          dropsColor: 'white',
          backgroundColor,
          sunColor: 'Orange',
          raysColor: 'OrangeRed',
        }}
      />
    </BackgroundContainer>
  ))
  .add('lighting', () => <Rain lighting />)
  .add('lighting with theme', () => (
    <BackgroundContainer color={backgroundColor}>
      <Rain
        lighting
        theme={{
          cloudsColor: 'MidnightBlue',
          boltColor: 'yellow',
          backgroundColor,
        }}
      />
    </BackgroundContainer>
  ))
  .add('lighting pathchy', () => <Rain lighting patchy />)
  .add('lighting pathchy with theme', () => (
    <BackgroundContainer color={backgroundColor}>
      <Rain
        patchy
        lighting
        theme={{
          cloudsColor: 'MidnightBlue',
          boltColor: 'yellow',
          backgroundColor,
          sunColor: 'Orange',
          raysColor: 'OrangeRed',
        }}
      />
    </BackgroundContainer>
  ));
