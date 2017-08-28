const baseConfig = require('../../webpack.config')

module.exports = storybookBaseConfig =>
  Object.assign({}, storybookBaseConfig, {
    entry: Object.assign({}, storybookBaseConfig.entry, {
      preview: ['babel-polyfill'].concat(storybookBaseConfig.entry.preview),
    }),
    resolve: Object.assign({}, storybookBaseConfig.resolve, {
      modules: baseConfig.resolve.modules,
    }),
    module: Object.assign({}, storybookBaseConfig.module, {
      rules: storybookBaseConfig.module.rules.concat(baseConfig.module.rules.slice(1)),
    }),
  })
