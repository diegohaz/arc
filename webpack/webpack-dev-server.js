/* eslint-disable */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.client.config')
const { ip, port } = require('./env')

new WebpackDevServer(webpack(config), {
  hot: true,
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
