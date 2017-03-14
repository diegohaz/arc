const path = require('path')
const webpack = require('webpack')
const WebpackMd5Hash = require('webpack-md5-hash')
const base = require('./webpack.base.config')
const stats = require('./stats.js')
const { ip, port, isDev, publicPath } = require('./env')

const isVendor = ({ userRequest }) => (
  userRequest &&
  userRequest.indexOf('node_modules') >= 0 &&
  userRequest.match(/\.js$/)
)

const config = Object.assign({}, base, {
  name: 'client',
  entry: {
    client: [path.join(__dirname, '../src')],
  },
  output: {
    path: path.join(__dirname, '../dist/public'),
    filename: '[name].[hash].js',
    publicPath: isDev ? `http://${ip}:${port}/` : publicPath,
  },
  plugins: base.plugins.concat([
    function saveStats() {
      this.plugin('done', statsData => stats.save(statsData))
    },
  ]),
})

if (isDev) {
  config.entry.client.unshift(
    `webpack-dev-server/client?http://${ip}:${port}/`,
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch'
  )

  config.plugins = config.plugins.concat([
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ])
} else {
  config.output.filename = '[name].[chunkHash].js'

  config.plugins = config.plugins.concat([
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: isVendor,
    }),
    new WebpackMd5Hash(),
    new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
  ])
}

module.exports = config
