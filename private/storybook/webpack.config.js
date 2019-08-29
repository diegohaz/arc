const baseConfig = require('../../webpack.config')

module.exports = (wpConfig) => {
  const storybookBaseConfig = wpConfig.config
  return {
    ...storybookBaseConfig,
    resolve: { ...storybookBaseConfig.resolve, modules: baseConfig.resolve.modules },
    module: { ...storybookBaseConfig.module, rules: storybookBaseConfig.module.rules.concat(baseConfig.module.rules.slice(1)) },
  }
}
