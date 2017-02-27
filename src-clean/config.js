const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com',
  },
}

module.exports = merge(config.all, config[config.all.env])
