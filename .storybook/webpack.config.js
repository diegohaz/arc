var baseConfig = require('../webpack/webpack.config')

module.exports = function (storybookBaseConfig, configType) {
  storybookBaseConfig.resolve = baseConfig.resolve
  storybookBaseConfig.entry.preview.unshift('babel-polyfill')
  return storybookBaseConfig
}
