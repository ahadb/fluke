# Fluke JS

## Intro

A multi-purpose library that generates random strings, sentences, numbers, software languages and lot's of other things.

This lib is still work in progress.

## Environment

You can use Fluke JS in Node or in the browser:

Node: Require the library in node:
 * `npm install -g fluke
 * `var fluke = require('fluke')`

Browser: Build and add reference to your html:
 * `<script src = "fluke.min.js"></script>`

## Usage

* You can create a new instance of Fluke: `var myFluke = new Fluke` - all instances will inherit methods from the prototype.
 * /i.e: then in your code `myFluke.gender()` to get random genders
* Fluke comes pre instantiated when in the browser environment. If you've added a reference to fluke.min in your head an instance of fluke will already be availble to you:
 * /i.e: you can then use `fluke.gender()`

## NPM Build Scripts / Installation

To install fluke simple use `npm`: `npm install -g flukejs`

* npm install
* npm run build
* npm run tests
* dist folder will contain your references


@todo: 'npm install -g fluke`

## API Reference

Coming...

## Tests

Mocha and Chai

## Contributors

Conributions are welcome, guidelines will be put up soon

## License

MIT [ahadb.com](http:////ahadb.com)


