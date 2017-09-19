const merge = require('lodash/merge')

// https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry
const req = require.context('.', true, /\.\/[^/]+\/[^/]+\/index\.js$/)


// This exports all components, resolving circular dependencies in two steps:
// 1. export empty objects in place of each component
// 2. require each component and merge it into the existing export for that module

const componentPaths = []

// export an empty module for each component
req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, '$1')
  componentPaths.push({ componentName, key })
  module.exports[componentName] = {}
})

// merge each component into its designated module
componentPaths.forEach(({ componentName, key }) => {
  merge(module.exports[componentName], req(key).default)
})
