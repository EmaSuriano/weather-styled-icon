import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Cloudy } from '../src';
import { centeredDecorator, themeDecorator } from './decorators';

storiesOf('Cloudy', module)
  .addDecorator(centeredDecorator)
  .addDecorator((story, context) => withInfo('Cloudy')(story)(context))
  .add('default', () => <Cloudy />)
  .add('different sizes', () => [
    <Cloudy size="0.5" />,
    <Cloudy />,
    <Cloudy size="1.5" />,
  ])
  .add('patchy', () => <Cloudy patchy />)
  .addDecorator(
    themeDecorator({ cloudsColor: 'greenYellow', backgroundColor: 'honeyDew' }),
  )
  .add('with theme', () => <Cloudy />)
  .add('patchy with theme', () => <Cloudy patchy />);
