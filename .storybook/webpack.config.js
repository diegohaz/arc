var baseConfig = require('../webpack.config')

module.exports = function (storybookBaseConfig, configType) {
  storybookBaseConfig.resolve = baseConfig.resolve
  return storybookBaseConfig
}
