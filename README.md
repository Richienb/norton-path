# Norton Path [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/norton-path/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/norton-path)

Gets the current path of the Norton CLI binary.

[![NPM Badge](https://nodei.co/npm/norton-path.png)](https://npmjs.com/package/norton-path)

## Install

```sh
npm install norton-path
```

## Usage

```js
const nortonPath = require("norton-path");

nortonPath;
//=> 'C:\\Program Files\\Norton Security\\Engine\\22.19.9.63\\Navw32.exe'
```

## API

### nortonPath

Type: `string`

The current path of the Norton CLI binary.
