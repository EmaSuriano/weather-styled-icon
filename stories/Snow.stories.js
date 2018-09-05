import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Snow } from '../src';
import { centeredDecorator, themeDecorator } from './decorators';


storiesOf('Snow', module)
  .addDecorator(centeredDecorator)
  .addDecorator((story, context) => withInfo('Snow')(story)(context))
  .add('default', () => <Snow />)
  .add('different sizes', () => [
    <Snow size="0.5" />,
    <Snow />,
    <Snow size="1.5" />,
  ])
  .add('patchy', () => <Snow patchy />)
  .addDecorator(
    themeDecorator({
      cloudsColor: 'RoyalBlue ',
      snowColor: 'SeaGreen ',
      backgroundColor: 'PaleGoldenRod',
      sunColor: 'Purple',
      raysColor: 'RebeccaPurple',
    }),
  )
  .add('with theme', () => <Snow />)
  .add('patchy with theme', () => <Snow patchy />);
