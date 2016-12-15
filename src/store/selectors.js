import upperFirst from 'lodash/upperFirst'
import forIn from 'lodash/forIn'

const req = require.context('.', true, /\.\/.+\/selectors\.js$/)

req.keys().forEach((key) => {
  const storeName = key.replace(/\.\/(.+)\/.+$/, '$1')
  const fromName = `from${upperFirst(storeName)}`
  const selectors = req(key)
  const getState = (state = {}) => state[storeName] || {}

  module.exports[fromName] = {}

  forIn(selectors, (selector, name) => {
    if (typeof selector === 'function') {
      module.exports[fromName][name] = (state, ...args) => selector(getState(state), ...args)
    }
  })
})
