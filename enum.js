/**
 * 枚举类
 * 1. 类型安全
 * 2. 成员检查
 * 3. 可扩展
 */
const debug = require('debug')('enums')

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

class Enum {
  constructor(source, opt) {
    this._options = opt || {
      freeze: true,
      hooks: null,
    }
    this._originVal = source
    if (Array.isArray(this._originVal)) {
      this._enumsFromArray(this._originVal)
    }
    if (isObject(this._originVal)) {
      this._enumsFromObject(this._originVal)
    }
    this._appendHooks(this._options.hooks)
    return this._options.freeze ? Object.freeze(this) : this
  }

  _enumsFromArray(enums) {
    for (let key = 0, len = enums.length; key < len; key++) {
      Object.defineProperty(this, enums[key], {
        value: key,
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
        console.log(hookName)
        Object.defineProperty(this, hookName, {
          value: hooks[hookName],
          enumerable: true,
        })
      }
    }
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
      this._originVal.map(function(val, idx) {
        parse2Obj[val] = idx
      })
    }
    return this._originVal
  }

  get(key) {
    if (!this[key]) return

    return this[key]
  }
}

module.exports = Enum
