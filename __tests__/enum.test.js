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
    expect(FRUIT.isApple('Apple')).toBeTruthy()
    expect(FRUIT.isApple('Banana')).toBeFalsy()
  })

  test('instance enum with handlers #Error', () => {
    function wrapperInstanceEnum() {
      const FRUIT = new Enum(['Banana', 'Apple'], { handlers: { get: function(val) { return val == this.Apple }} })
    }
    expect(wrapperInstanceEnum).toThrow()
  })

  test('method#get(key)', () => {
    const Fruit = new Enum({ APPLE: '1', BANANA: '2' })
    expect(Fruit.get('APPLE')).toEqual(Fruit.APPLE)
    expect(Fruit.get('WATERMELON')).toBeUndefined()
  })

  test('method#has(key)', () => {
    const Fruit = new Enum({ APPLE: '1', BANANA: '2' })
    expect(Fruit.has('APPLE')).toBeTruthy()
    expect(Fruit.get('WATERMELON')).toBeUndefined()
  })

  test('method#values()', () => {
    const Fruit = new Enum({ APPLE: '1', BANANA: '2' })
    expect(Fruit.values()).toEqual(['1', '2'])
  })

  test('method#keys()', () => {
    const Fruit = new Enum({ APPLE: '1', BANANA: '2' })
    expect(Fruit.keys()).toEqual(['APPLE', 'BANANA'])
  })

  test('method#original() Object', () => {
    const Fruit = new Enum({ APPLE: '1', BANANA: '2' })
    expect(Fruit.original()).toEqual({ APPLE: '1', BANANA: '2' })
  })

  test('method#original() Array', () => {
    const Fruit = new Enum(['Apple', 'Banana'], { mirror: true })
    expect(Fruit.original()).toEqual({ Apple: 'Apple', Banana: 'Banana' })
  })

})
