function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]'
}

function deepFreeze(obj) {
  let propsNames = Object.getOwnPropertyNames(obj)
  propsNames.forEach(function(name) {
    let prop = obj[name]

    if (isObject(prop) && prop !== null) {
      deepFreeze(prop)
    }
  });
  return Object.freeze(obj)
}

module.exports = { isObject, deepFreeze }
