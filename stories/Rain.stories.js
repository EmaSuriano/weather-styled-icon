import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Rain } from '../src';
import { centeredDecorator, themeDecorator } from './decorators';

storiesOf('Rain', module)
  .addDecorator(centeredDecorator)
  .addDecorator((story, context) => withInfo('Rain')(story)(context))
  .add('default', () => <Rain />)
  .add('different sizes', () => [
    <Rain size="0.5" />,
    <Rain />,
    <Rain size="1.5" />,
  ])
  .add('patchy', () => <Rain patchy />)
  .add('lighting', () => <Rain lighting />)
  .add('lighting patchy', () => <Rain lighting patchy />)
  .addDecorator(
    themeDecorator({
      cloudsColor: 'MidnightBlue',
      dropsColor: 'white',
      backgroundColor: 'Lavender',
      sunColor: 'Orange',
      raysColor: 'OrangeRed',
    }),
  )
  .add('with theme', () => <Rain />)
  .add('patchy with theme', () => <Rain patchy />)
  .add('lighting with theme', () => <Rain lighting />)
  .add('lighting patchy with theme', () => <Rain patchy lighting />);
