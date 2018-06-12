# bon-kreyol



![npm](https://img.shields.io/npm/v/bon-kreyol.svg) ![license](https://img.shields.io/npm/l/bon-kreyol.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/bon-kreyol.svg)

![nodei.co](https://nodei.co/npm/bon-kreyol.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/bon-kreyol.svg)
![stars](https://img.shields.io/github/stars/wspecs/bon-kreyol.svg)
![forks](https://img.shields.io/github/forks/wspecs/bon-kreyol.svg)

![forks](https://img.shields.io/github/forks/wspecs/bon-kreyol.svg)

![](https://david-dm.org/wspecs/bon-kreyol/status.svg)
![](https://david-dm.org/wspecs/bon-kreyol/dev-status.svg)

## Features

- Parse text with chords

## Usage

```js

import {sanitizeKreyol} from 'bon-kreyol';
console.log(sanitizeKreyol('Si ou vlé kasé tout kòd vié péché'));
// Si ou vle kase tout kòd vye peche,
```

## Install

`npm install --save bon-kreyol`


## Scripts

 - **npm run build** : `rm -rf dist && tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[args-finder](https://www.npmjs.com/package/args-finder) | 0.0.3 | ✖
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.0.2 | ✔
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains TypeScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> https://twitter.com//wendlysaintil

## License

 - **MIT** : http://opensource.org/licenses/MIT