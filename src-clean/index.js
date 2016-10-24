require('babel-polyfill')
require('babel-core/register')

var WebpackIsomorphicTools = require('webpack-isomorphic-tools')
var webpackIsomorphicToolsConfig = require('../webpack/webpack-isomorphic-tools')

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
  .server('./', function () {
    require('./server')
  })
