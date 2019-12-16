# weather-styled-icon

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![dependabot](https://badgen.net/dependabot/EmaSuriano/weather-styled-icon/?icon=dependabot)](https://dependabot.com/)
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Storybook][storybook-image]][demo-link]
[![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/)

Animated and configurable weather icons made in React ⚛️, using styled-components 4 💅 and CSS3 Animations.

Check this [Storybook][demo-link] to try them!

Icons and styles were taken from this [Codepen](https://codepen.io/joshbader/pen/EjXgqr?q=weather&limit=all&type=type-pens), please leave him a start 🌟

![Weather styled Icon](https://user-images.githubusercontent.com/3399429/55830109-8f1a9880-5b10-11e9-8efb-9fad5d2a2a92.gif)

## Installation

```sh
yarn add styled-components weather-styled-icon
```

## Usage example

```javascript
import React from 'react';
import { Sunny, Cloudy, Rain, Snow } from 'weather-styled-icon';

const App = () => (
  <div>
    <Sunny />
    <Cloudy />
    <Rain />
    <Snow />
  </div>
);
```

_For more examples and usage, please refer to the [Storybook][demo-link]._

## Theming

All the icons of the library are easy to style. Just by rendering `WeatherThemeProvider` before the use of the icons, they will pick the pallete from the theme.

```javascript
import React from 'react';
import { WeatherThemeProvider, Sunny } from 'weather-styled-icons';

const theme = {
  backgroundColor: 'Lavender',
  sunColor: 'Orange',
  raysColor: 'OrangeRed',
};

const App = () => (
  <WeatherThemeProvider theme={theme}>
    <Sunny />
  </WeatherThemeProvider>
);
```

## Licence

MIT.

## Contributing

1. Fork it (<https://github.com/EmaSuriano/weather-styled-icon/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->

[greenkeeper-image]: https://badges.greenkeeper.io/EmaSuriano/weather-styled-icon.svg
[npm-image]: https://badge.fury.io/js/weather-styled-icon.svg
[npm-url]: https://www.npmjs.com/package/weather-styled-icon
[travis-image]: https://travis-ci.org/EmaSuriano/weather-styled-icon.svg?branch=master
[travis-url]: https://travis-ci.org/EmaSuriano/weather-styled-icon
[storybook-image]: https://img.shields.io/badge/%F0%9F%93%93-Storybook-ff69b4.svg
[demo-link]: https://emasuriano.github.io/weather-styled-icon/?selectedKind=%40Welcome
