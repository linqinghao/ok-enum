const Enum = require('../lib/enum')

describe('enum', () => {
  test('Array or object can be as parameter to Enum Class ', () => {
    const WEEK = new Enum(['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'])
    expect(WEEK).toBeInstanceOf(Enum)

    const MONTH = new Enum({
      Jan: '1',
      Feb: '2',
    })
    expect(MONTH).toBeInstanceOf(Enum)
  })

  test('instance enum with freeze config', () => {
    const FRUIT = new Enum(['Banana', 'Apple'], { freeze: true })
    FRUIT.Banana = '3'
    expect(FRUIT.Banana).toEqual(0)
  })

  test('instance enum with mirror config', () => {
    const FRUIT = new Enum(['Banana', 'Apple'], { mirror: true })
    expect(FRUIT.values()).toEqual(['Banana', 'Apple'])
  })

  test('instance enum with handlers', () => {
    const FRUIT = new Enum(['Banana', 'Apple'], { mirror: true, handlers: { isApple: function(val) { return val == this.Apple }} })
    expect(FRUIT.isApple('Apple')).toEqual(true)
    expect(FRUIT.isApple('Banana')).toEqual(false)
  })

})
