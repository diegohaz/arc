/* eslint-disable */
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const config = require('./webpack.config')

const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  host: ip,
  stats: false,
  historyApiFallback: true,
  contentBase: 'public'
}).listen(port, ip, (err) => {
  if (err) {
    return console.log(err)
  }

  console.log(`Listening at http://${ip}:${port}`)
})
