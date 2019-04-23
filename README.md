# ok-enum

Encapsulates the enum type in js

![travis-ci](https://img.shields.io/travis/linchinghao/ok-enum.svg)

## Features
- Encapsulates the enum type in js
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
const Enum = require('ok-enum');

// pass object
const Fruit = new Enum({ Apple: '1', Banana: '2' }); 
// Enum {
//   _options: { freeze: true, mirror: false, hooks: null },
//   _originVal: { Apple: '1', Banana: '2' },
//   Apple: '1',
//   Banana: '2' 
// }

// pass array
const Day = new Enum(['Mon', 'Tus']);
// Enum {
//   _options: { freeze: true, mirror: false, hooks: null },
//   _originVal: [ 'Mon', 'Tus' ],
//   Mon: 0,
//   Tus: 1
// }


```

## API

### Enum config

```js
// @param {Boolean} [mirror=false]
const Day = new Enum(['Mon', 'Tus'], { mirror: true });
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
    }
  }
})

WEEK.isWeek('Sat'); // true
```

### Instance methods
- Enum#get(key)
- Enum#has(key)
- Enum#values()
- Enum#keys()
- Enum#original()


## LICENSE

MIT @linchinghao