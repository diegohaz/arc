const selector = () => {}

const fromEntity = new Proxy({}, {
  get: (target, property) => selector,
  apply: (target, thisArg, argumentsList) => selector
})

const selectors = new Proxy({}, {
  get: (target, property) => fromEntity
})

module.exports = selectors
