;(function() {
  var root =
    // eslint-disable-next-line no-restricted-globals
    (typeof self == 'object' && self.self === self && self) ||
    (typeof global == 'object' && global.global === global && global) ||
    this ||
    {}

  var toString = Object.prototype.toString

  var _ = function(obj) {
    if (obj instanceof _) return obj
    if (!(this instanceof _)) return new _(obj)
  }

  _.isArray = function(obj) {
    return toString.call(obj) === '[object Array]'
  }

  _.functions = function(obj) {
    let names = []
    for (var key in obj) {
      if (toString.call(obj[key])) names.push(key)
    }
    return names
  }

  _.each = function(obj, cb) {
    for (let i = 0, len = obj.length; i < len; i++) {
      cb(obj[i])
    }
  }

  _.mixin = function(obj) {
    //遍历绑定在_上的 方法
    _.each(_.functions(obj), name => {
      _.prototype[name] = function() {
        return obj[name].call(arguments)
      }
    })
    return _
  }

  _.mixin(_)

  if (typeof exports !== void 0) {
    exports._ = _
  } else {
    root._ = _
  }
})()
