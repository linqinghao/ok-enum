const Enum = require('./lib/enum');

// const dayEnum = new Enum({
//   Mon: '1',
//   Tus: '2'
// }, {
//   hooks: {
//     isMon(val) {
//       return val == this.Mon;
//     }
//   }
// });

// console.log(dayEnum);

// console.log(dayEnum.isMon('123'))

const Month = new Enum(['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'], { mirror: true })

// console.log(Month);
console.log(Month.original())

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