var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

var ip = process.env.IP || '0.0.0.0'
var port = (+process.env.PORT + 1) || 3001

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  host: ip,
  stats: false,
  historyApiFallback: true,
  contentBase: 'public',
  compress: true,
  headers: {
    'Access-Control-Allow-Origin': '*'
  }
}).listen(port, ip, function (err, result) {
  if (err) {
    return console.log(err)
  }

  console.log('Listening at http://' + ip + ':' + port)
})
