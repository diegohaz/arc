// https://github.com/diegohaz/arc/wiki/Containers
const req = require.context('.', false, /^((?!index).)*\.js$/)

req.keys().forEach((key) => {
  const containerName = key.replace(/^\.\/([^.]+)\.js$/, '$1')
  module.exports[containerName] = req(key).default
})
