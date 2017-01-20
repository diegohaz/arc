const baseConfig = require('../webpack.config')

module.exports = storybookBaseConfig =>
  Object.assign({}, storybookBaseConfig, {
    resolve: baseConfig.resolve,
    module: Object.assign({}, storybookBaseConfig.module, {
      loaders: storybookBaseConfig.module.loaders.concat(baseConfig.module.loaders)
    })
  })
