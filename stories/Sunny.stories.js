import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Sunny } from '../src';
import { BackgroundContainer, CenteredContainer } from './Container';

storiesOf('Sunny', module)
  .addDecorator(story => <CenteredContainer>{story()}</CenteredContainer>)
  .addDecorator((story, context) => withInfo('Sunny')(story)(context))
  .add('default', () => <Sunny />)
  .add('different sizes', () => [
    <Sunny size="0.5" />,
    <Sunny />,
    <Sunny size="1.5" />,
  ])
  .add('with theme', () => (
    <BackgroundContainer color="peachPuff">
      <Sunny
        theme={{
          sunColor: 'SkyBlue',
          raysColor: 'SlateBlue',
          backgroundColor: 'peachPuff',
        }}
      />
    </BackgroundContainer>
  ));
