# ok-enum

Encapsulates the Enum type in js

![travis-ci](https://img.shields.io/travis/linchinghao/ok-enum.svg?style=flat-square) ![coverage](https://img.shields.io/codecov/c/github/linchinghao/ok-enum.svg?style=flat-square) ![downloads](https://img.shields.io/npm/dt/ok-enum.svg?style=flat-square)

## Features

- Encapsulates the Enum type in js
- Easy to use and extend
- Avoid enumeration values being modified

## Install

```js
$ npm install --save ok-enum
// or
$ yarn add ok-enum
```

## Examples

```js
const Enum = require('ok-enum')

// pass object
const Fruit = new Enum({ Apple: '1', Banana: '2' })
// Enum {
//   _options: { freeze: true, mirror: false, handlers: null },
//   _originVal: { Apple: '1', Banana: '2' },
//   Apple: '1',
//   Banana: '2'
// }

// pass array
const Day = new Enum(['Mon', 'Tus'])
// Enum {
//   _options: { freeze: true, mirror: false, handlers: null },
//   _originVal: [ 'Mon', 'Tus' ],
//   Mon: 0,
//   Tus: 1
// }
```

## API

### Config

```js
// @param {Boolean} [mirror=false]
const Day = new Enum(['Mon', 'Tus'], { mirror: true })
// Enum {
//   _options: { mirror: true },
//   _originVal: [ 'Mon', 'Tus' ],
//   Mon: 'Mon',
//   Tus: 'Tus'
// }

// @param {Boolean} [freeze=true]
const Fruit = new Enum({ Apple: '1', Banana: '2' }, { freeze: false })
// you can modify enum
Fruit.Apple = '3'

// @param {Object} [handlers]
const WEEK = new Enum(['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'], {
  mirror: true,
  handlers: {
    isWeek: function(val) {
      return val == this.Sat || val == this.Sun
    },
  },
})

WEEK.isWeek('Sat') // true
```

### Methods

- get(key)
  return value in the enums by the key.

  ```js
  const Fruit = new Enum({ APPLE: '1', BANANA: '2' })
  Fruit.get('APPLE') // '1'
  Fruit.get('WATERMELON') // undefined
  ```

- has(key)
  return true if key in the enums.

  ```js
  const Fruit = new Enum({ APPLE: '1', BANANA: '2' })
  Fruit.has('APPLE') // true
  Fruit.has('WATERMELON') // false
  ```

- values()
  return all values in the enums by array.

  ```js
  const Fruit = new Enum({ APPLE: '1', BANANA: '2' })
  Fruit.values() // ['1', '2']
  ```

- keys()
  return all keys in the enums by array.

  ```js
  const Fruit = new Enum({ APPLE: '1', BANANA: '2' })
  Fruit.keys() // ['APPLE', 'BANANA']
  ```

- original()
  return original values.

  ```js
  const Fruit = new Enum({ APPLE: '1', BANANA: '2' })
  Fruit.original() // { APPLE: '1', BANANA: '2' }
  ```

## LICENSE

MIT @linchinghao
