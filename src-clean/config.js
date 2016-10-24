import path from 'path'

const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000
const browser = typeof window !== 'undefined'

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    root: path.join(__dirname, '..'),
    baseUrl: `http://${ip}:${port}`,
    apiUrl: `http://${ip}:9000`,
    browser,
    ip,
    port
  },
  test: {},
  development: {},
  production: {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
    baseUrl: 'http://cblhub.diegohaz.com',
    apiUrl: 'https://cblhub-api.diegohaz.com'
  }
}

module.exports = exports = { ...config.all, ...config[config.all.env] }
export default exports
