import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Snow } from '../src';
import { BackgroundContainer, CenteredContainer } from './Container';

const backgroundColor = 'PaleGoldenRod';

storiesOf('Snow', module)
  .addDecorator(story => <CenteredContainer>{story()}</CenteredContainer>)
  .addDecorator((story, context) => withInfo('Snow')(story)(context))
  .add('default', () => <Snow />)
  .add('different sizes', () => [
    <Snow size="0.5" />,
    <Snow />,
    <Snow size="1.5" />,
  ])
  .add('with theme', () => (
    <BackgroundContainer color={backgroundColor}>
      <Snow
        theme={{
          cloudsColor: 'RoyalBlue ',
          snowColor: 'SeaGreen ',
          backgroundColor,
        }}
      />
    </BackgroundContainer>
  ))
  .add('patchy', () => <Snow patchy />)
  .add('patchy with theme', () => (
    <BackgroundContainer color={backgroundColor}>
      <Snow
        patchy
        theme={{
          cloudsColor: 'RoyalBlue ',
          snowColor: 'SeaGreen ',
          backgroundColor,
          sunColor: 'Purple',
          raysColor: 'RebeccaPurple',
        }}
      />
    </BackgroundContainer>
  ));
