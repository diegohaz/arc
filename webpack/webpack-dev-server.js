/* eslint-disable */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

const ip = process.env.IP || 'localhost'
const port = (+process.env.PORT + 1) || 3001

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  host: ip,
  stats: false,
  historyApiFallback: true,
  contentBase: 'public',
  compress: true,
}).listen(port, ip, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`\nwebpack: http://${ip}:${port}`)
})
