# weather-styled-icon

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![dependabot](https://badgen.net/dependabot/EmaSuriano/weather-styled-icon/?icon=dependabot)](https://dependabot.com/)
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Storybook][storybook-image]][demo-link]
[![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/)

![Weather styled Icon](https://user-images.githubusercontent.com/3399429/55830109-8f1a9880-5b10-11e9-8efb-9fad5d2a2a92.gif)

> Animated and configurable weather icons made in React, using [styled-components 💅](https://styled-components.com/) and CSS Animations.

**[Live Demo ✨][demo-link]**

Icons and styles were taken from this [Codepen](https://codepen.io/joshbader/pen/EjXgqr?q=weather&limit=all&type=type-pens), please leave him a start 🌟

## Installation

```bash
> yarn add styled-components weather-styled-icon
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

_For more examples and usage, please refer to the [Docs page][demo-link]._

## Theming

Given all the icons are using `styled-components`, theming is quite easy to do. You can import `WeatherThemeProvider` from the library, which comes with the default colors already set up, and by providing a new `theme` object you can override them. You can find the `theme` structure in this [file](https://github.com/EmaSuriano/weather-styled-icon/blob/master/src/constants/defaultTheme.js).

```javascript
import React from 'react';
import { WeatherThemeProvider, Sunny, Rain } from 'weather-styled-icons';

const myCustomTheme = {
  sunColor: 'Orange',
  raysColor: 'OrangeRed',
};

const App = () => (
  <WeatherThemeProvider theme={myCustomTheme}>
    <Sunny />
    <Rain />
  </WeatherThemeProvider>
);
```

## Contributing

1. Fork this project: https://github.com/EmaSuriano/weather-styled-icon/fork
2. Create your feature branch: `git checkout -b my-cool-feature`
3. Commit your changes: `git commit -am 'feat: add my cool feature'`
4. Push the changes to your repository: `git push origin my-cool-feature`
5. Create a new Pull Request: https://github.com/EmaSuriano/weather-styled-icon/compare

## Licence

MIT.

<!-- Markdown link & img dfn's -->

[npm-image]: https://badge.fury.io/js/weather-styled-icon.svg
[npm-url]: https://www.npmjs.com/package/weather-styled-icon
[travis-image]: https://travis-ci.com/EmaSuriano/weather-styled-icon.svg?branch=master
[travis-url]: https://travis-ci.com/EmaSuriano/weather-styled-icon
[storybook-image]: https://img.shields.io/badge/%F0%9F%93%93-Storybook-ff69b4.svg
[demo-link]: https://weather-styled-icons.netlify.app/
