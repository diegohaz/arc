const path = require('path')
const fs = require('fs')
const HappyPack = require('happypack')
const WebpackMd5Hash = require('webpack-md5-hash')
const nodeExternals = require('webpack-node-externals')
const { spawn } = require('child_process')
const fkill = require('fkill')
const devServer = require('@webpack-blocks/dev-server2')

const {
  addPlugins, createConfig, entryPoint, env, setOutput, sourceMaps, defineConstants, webpack,
  setDevTool, group,
} = require('@webpack-blocks/webpack2')

const host = process.env.HOST || 'localhost'
const port = (+process.env.PORT + 1) || 3001
const publicPath = `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/')
const devDomain = `http://${host}:${port}/`

const serverEntryPath = path.join(__dirname, 'src/server.js')
const clientEntryPath = path.join(__dirname, 'src/client.js')
const outputPath = path.join(__dirname, 'dist/public')
const assetsPath = path.join(__dirname, 'dist/assets.json')

const isVendor = ({ userRequest }) => (
  userRequest &&
  userRequest.indexOf('node_modules') >= 0 &&
  userRequest.match(/\.js$/)
)

let watching
const runServerConfig = (serverConfig, prod) => () => ({
  plugins: [
    function run() {
      this.plugin('done', stats => {
        console.log(this.options)
        const { output } = this.options
        const { client } = stats.toJson({ modules: false }).assetsByChunkName
        const assets = {
          js: [].concat(client)
            .filter(path => !/map$/.test(path))
            .map(path => output.publicPath + path),
        }
        fs.writeFileSync(assetsPath, JSON.stringify(assets))
        if (!watching) {
          const serverCompiler = webpack(serverConfig)
          serverCompiler[prod ? 'run' : 'watch'](null, () => {
            console.log('watching')
          })
          watching = true
        }
      })
    },
  ],
})

let serverPid
const startServer = () => () => ({
  plugins: [
    function start() {
      this.plugin('done', () => {
        const promise = serverPid ? fkill(serverPid) : Promise.resolve()
        promise.then(() => {
          const server = spawn('node', ['.'])
          serverPid = server.pid
          server.stdout.on('data', data => console.log(`stdout: ${data}`))
          server.stderr.on('data', data => console.log(`stderr: ${data}`))
          console.log(serverPid)
        })
      })
    },
  ],
})

const baseConfig = (name) => group([
  setOutput({
    path: outputPath,
  }),
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.PUBLIC_PATH': publicPath,
  }),
  addPlugins([
    new HappyPack({
      loaders: ['babel-loader'],
      cacheContext: {
        env: process.env.NODE_ENV,
      },
    }),
  ]),
  () => ({
    name,
    resolve: {
      modules: ['src', 'node_modules'],
    },
    module: {
      rules: [
        { test: /\.jsx?$/, loader: 'happypack/loader', exclude: /node_modules/ },
        { test: /\.(png|jpe?g|svg)$/, loader: 'url-loader?&limit=8000' },
        { test: /\.(woff2?|ttf|eot)$/, loader: 'url-loader?&limit=8000' },
      ],
    },
  }),

  env('development', [
    setOutput({
      publicPath: devDomain,
    }),
  ]),

  env('production', [
    setOutput({ publicPath }),
  ]),
])

const serverConfig = createConfig([
  baseConfig('server'),
  setDevTool('sourcemap'),
  entryPoint({
    server: serverEntryPath,
  }),
  setOutput({
    filename: '../[name].js',
    libraryTarget: 'commonjs2',
  }),
  addPlugins([
    new webpack.BannerPlugin({
      banner: 'require("source-map-support").install();',
      raw: true,
      entryOnly: false,
    }),
    new webpack.BannerPlugin({
      banner: 'global.assets = require("./assets.json");',
      raw: true,
    }),
  ]),
  startServer(),
  () => ({
    target: 'node',
    externals: [nodeExternals()],
  }),
])

const clientConfig = createConfig([
  baseConfig('client'),
  entryPoint({
    client: clientEntryPath,
  }),
  setOutput({
    filename: '[name].[hash].js',
  }),

  env('development', [
    sourceMaps(),
    devServer({
      contentBase: 'public',
      stats: 'errors-only',
      publicPath: devDomain,
      host,
      port,
    }),
    addPlugins([
      new webpack.NamedModulesPlugin(),
    ]),
    runServerConfig(serverConfig),
  ]),

  env('production', [
    setOutput({
      filename: '[name].[chunkhash].js',
    }),
    addPlugins([
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor',
        minChunks: isVendor,
      }),
      new WebpackMd5Hash(),
      new webpack.optimize.UglifyJsPlugin({ compress: { warnings: false } }),
    ]),
    runServerConfig(serverConfig, true),
  ]),
])

module.exports = clientConfig
