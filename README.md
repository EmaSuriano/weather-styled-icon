# weather-styled-icon

[![Greenkeeper badge][greenkeeper-image]](https://greenkeeper.io/)
[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls][coverrals-image]][coverrals-url]
[![Storybook][storybook-image]][demo-link]

Animated and configurable weather icons made in React ⚛️, using styled-components 💅 and CSS3 Animations.

Check this [Storybook][demo-link] to try them!

Icons and styles were taken from this [Codepen](https://codepen.io/joshbader/pen/EjXgqr?q=weather&limit=all&type=type-pens), please leave him a start 🌟

![Weather styled Icon](docs/weather-styled-icon.gif)

## Installation

```sh
npm install weather-styled-icon
```

## Usage example

The library exports in total 4 icons, each one can be configurable by props:

* [Sunny](#Sunny)
* [Cloudy](#Cloudy)
* [Rain](#Rain)
* [Snow](#Snow)

### Sunny

```javascript
<Sunny
  size={1}
  theme={{
    sunColor: 'SkyBlue',
    raysColor: 'SlateBlue',
    backgroundColor: 'peachPuff',
  }}
/>
```

### Cloudy

```javascript
<Cloudy
  size={1}
  patchy // Show the sun at a side of the cloud
  theme={{
    cloudsColor: 'greenYellow',
    backgroundColor: 'honeyDew',
    sunColor: 'hotPink',
    raysColor: 'indianRed',
  }}
/>
```

### Rain

```javascript
<Rain
  size={1}
  patchy // Show the sun at a side of the cloud
  lighting // Show rays instead of drops falling of the cloud
  theme={{
    cloudsColor: 'MidnightBlue',
    boltColor: 'yellow',
    backgroundColor,
    sunColor: 'Orange',
    raysColor: 'OrangeRed',
  }}
/>
```

### Snow

```javascript
<Snow
  size={1}
  patchy // Show the sun at a side of the cloud
  theme={{
    cloudsColor: 'RoyalBlue ',
    snowColor: 'SeaGreen ',
    backgroundColor,
    sunColor: 'Purple',
    raysColor: 'RebeccaPurple',
  }}
/>
```

_For more examples and usage, please refer to the [Storybook][demo-link]._

## Development setup

### Installing dependencies

```sh
npm install
```

### Running tests

```sh
npm test
```

### Starting storybook

```sh
npm run storybook
```

### Checking lint

```sh
npm run lint
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
[wiki]: https://github.com/yourname/yourproject/wiki
[storybook-image]: https://img.shields.io/badge/%F0%9F%93%93-Storybook-ff69b4.svg
[demo-link]: https://emasuriano.github.io/weather-styled-icon/?selectedKind=%40Welcome
[coverrals-image]: https://coveralls.io/repos/github/EmaSuriano/weather-styled-icon/badge.svg?branch=master
[coverrals-url]: https://coveralls.io/github/EmaSuriano/weather-styled-icon
