import React from 'react';

import { storiesOf } from '@storybook/react';
import WelcomeStoryBook from './WelcomeStoryBook';

storiesOf('Welcome', module).add('to Weather Styled Icon', () => (
  <WelcomeStoryBook />
));

// storiesOf('Button', module)
//   .add('with text', () => (
//     <Button onClick={action('clicked')}>Hello Button</Button>
//   ))
//   .add('with some emoji', () => (
//     <Button onClick={action('clicked')}>😀 😎 👍 💯</Button>
//   ));
