const Enum = require('./enum');

const dayEnum = new Enum({
  Mon: '1',
  Tus: '2'
}, {
  hooks: {
    isMon(val) {
      return val == this.Mon;
    }
  }
});

// const a = new Enum([1, 2])

// console.log(a);

// dayEnum.extend('isMon', function(val) {
//   console.log(val == this.Mon || val == this.Tus);
// })

// dayEnum.isMon('1');


// dayEnum.Mon = 123123;

// console.log(dayEnum, dayEnum.Mon)


// const a = new Enum(['a', 'b'])

// console.log(a)