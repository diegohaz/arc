const selector = () => {}

const fromEntity = new Proxy({}, {
  get: () => selector,
  apply: () => selector,
})

const selectors = new Proxy({}, {
  get: () => fromEntity,
})

module.exports = selectors
