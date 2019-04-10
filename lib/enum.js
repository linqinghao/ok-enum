const debug = require('debug')('enums')

const Utils = require('./utils')

class Enum {
  constructor(source, opt) {
    this._options = opt || {
      freeze: true,
      mirror: false,
      hooks: null,
    }
    this._originVal = source
    if (Array.isArray(this._originVal)) {
      this._enumsFromArray(this._originVal)
    }
    if (Utils.isObject(this._originVal)) {
      this._enumsFromObject(this._originVal)
    }
    this._appendHooks(this._options.hooks)
    return this._options.freeze ? Object.freeze(this) : this
  }

  _enumsFromArray(enums) {
    for (let key = 0, len = enums.length; key < len; key++) {
      Object.defineProperty(this, enums[key], {
        value: this._options.mirror ? enums[key] : key,
        enumerable: true,
      })
    }
  }

  _enumsFromObject(enums) {
    for (let key in enums) {
      Object.defineProperty(this, key, {
        value: enums[key],
        enumerable: true,
      })
    }
  }

  _appendHooks(hooks) {
    if (hooks) {
      for (let hookName in hooks) {
        if (this[hookName]) {
          throw new Error(
            "You don't use the function name like get, values, has, keys, original."
          )
        }
        Object.defineProperty(this, hookName, {
          value: hooks[hookName],
          enumerable: true,
        })
      }
    }
  }

  get(key) {
    return this[key]
  }

  has(key) {
    return Object.keys(this._originVal).includes(key)
  }

  values() {
    return Object.values(this._originVal)
  }

  keys() {
    return Object.keys(this._originVal)
  }

  original() {
    if (Array.isArray(this._originVal)) {
      const parse2Obj = {}
      const mirror = this._options.mirror
      this._originVal.map(function(val, idx) {
        parse2Obj[val] = mirror ? val : idx
      })
      return parse2Obj
    }
    return this._originVal
  }
}

module.exports = Enum
