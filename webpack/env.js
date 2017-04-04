module.exports = {
  ip: process.env.IP || 'localhost',
  port: (+process.env.PORT + 1) || 3001,
  isDev: process.env.NODE_ENV !== 'production',
  publicPath: `/${process.env.PUBLIC_PATH || ''}/`.replace('//', '/'),
}
