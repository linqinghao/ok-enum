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
})
