function createCache() {
  const data = {}
  return {
    set: function (key, value) {
      data[key] = value
    },
    get: function (key) {
      return data[key]
    },
  }
}

createCache().set('foo', 'bar')
console.log(createCache().get('foo'))
