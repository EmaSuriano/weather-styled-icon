import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Sunny } from '../src';
import { centeredDecorator, themeDecorator } from './decorators';

storiesOf('Sunny', module)
  .addDecorator(centeredDecorator)
  .addDecorator((story, context) => withInfo('Sunny')(story)(context))
  .add('default', () => <Sunny />)
  .add('different sizes', () => [
    <Sunny size="0.5" />,
    <Sunny />,
    <Sunny size="1.5" />,
  ])
  .addDecorator(
    themeDecorator({
      sunColor: 'SkyBlue',
      raysColor: 'SlateBlue',
      backgroundColor: 'peachPuff',
    }),
  )
  .add('with theme', () => <Sunny />);
