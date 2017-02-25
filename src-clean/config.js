const merge = require('lodash/merge')

const browser = typeof window !== 'undefined'
const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000
const basename = `/${process.env.PUBLIC_PATH || ''}`.replace('//', '/')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    baseUrl: `http://${ip}:${port}${basename}`,
    apiUrl: 'https://jsonplaceholder.typicode.com',
    basename,
    browser,
    ip,
    port,
  },
  test: {},
  development: {},
  production: {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
    baseUrl: 'https://arc.diegohaz.com',
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
}

module.exports = merge(config.all, config[config.all.env])
