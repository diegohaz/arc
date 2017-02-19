import merge from 'lodash/merge'

const browser = typeof window !== 'undefined'

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    graphqlUrl: 'http://localhost:3001/graphql',
    browser
  },
  test: {},
  development: {},
  production: {}
}

module.exports = merge(config.all, config[config.all.env])
export default module.exports
