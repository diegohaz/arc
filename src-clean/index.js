require('babel-polyfill')
require('babel-core/register')({
  plugins: ['transform-es2015-modules-commonjs'],
})

const WebpackIsomorphicTools = require('webpack-isomorphic-tools')
const webpackIsomorphicToolsConfig = require('../webpack/webpack-isomorphic-tools')

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
  .server('./', () => {
    require('./server')
  })
