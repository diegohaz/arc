var baseConfig = require('../webpack.config')

module.exports = function (storybookBaseConfig, configType) {
  storybookBaseConfig.resolve = baseConfig.resolve
  storybookBaseConfig.module.loaders.push(...baseConfig.module.loaders)
  return storybookBaseConfig
}
