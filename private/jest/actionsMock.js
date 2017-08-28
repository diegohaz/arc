const snakeCase = require('lodash/snakeCase')

const action = prefix => new Proxy({}, {
  get: (target, suffix) => () => ({
    type: snakeCase(`${prefix}_${suffix}`).toUpperCase(),
  }),
  apply: () => () => ({
    type: snakeCase(prefix).toUpperCase(),
  }),
})

const actions = new Proxy({}, {
  get: (target, property) => {
    if (/^[A-Z_]+$/.test(property)) {
      return property
    }
    return action(property)
  },
})

module.exports = actions
