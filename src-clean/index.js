require('babel-polyfill')
require('babel-core/register')

const WebpackIsomorphicTools = require('webpack-isomorphic-tools')
const webpackIsomorphicToolsConfig = require('../webpack/webpack-isomorphic-tools')

global.webpackIsomorphicTools = new WebpackIsomorphicTools(webpackIsomorphicToolsConfig)
  .server('./', () => {
    require('./server')
  })
