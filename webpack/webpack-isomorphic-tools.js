var WebpackIsomorphicToolsPlugin = require('webpack-isomorphic-tools/plugin')

var config = {
  webpack_assets_file_path: 'webpack/webpack-assets.json',
  assets: {
    images: {
      extensions: ['jpeg', 'jpg', 'png', 'gif', 'svg'],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    },
    fonts: {
      extensions: ['woff', 'woff2', 'ttf', 'eot'],
      parser: WebpackIsomorphicToolsPlugin.url_loader_parser
    }
  },
  modulesDirectories: ['src', 'node_modules']
}

module.exports = exports = config
