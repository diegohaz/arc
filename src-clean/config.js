import merge from 'lodash/merge'

const browser = typeof window !== 'undefined'
const ip = process.env.IP || '0.0.0.0'
const port = process.env.PORT || 3000
const basename = `/${process.env.PUBLIC_PATH || ''}`.replace('//', '/')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    baseUrl: `http://${ip}:${port}${basename}`,
    apiUrl: `http://${ip}:${port}/api`,
    graphqlUrl: `http://${ip}:${port}/api/graphql`,
    serverGraphqlUrl: 'http://localhost:3000/api/graphql',
    mongo: {
      options: {
        db: {
          safe: true
        }
      }
    },
    basename,
    browser,
    ip,
    port
  },
  test: {
    mongo: {
      uri: `mongodb://${ip}/arc-test`,
      options: {
        debug: false
      }
    }
  },
  development: {
    mongo: {
      uri: `mongodb://${ip}/arc-dev`,
      options: {
        debug: true
      }
    }
  },
  production: {
    ip: process.env.IP || '0.0.0.0',
    port: process.env.PORT || 8080,
    baseUrl: 'https://arc.diegohaz.com',
    apiUrl: 'https://arc.diegohaz.com/api',
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/arc'
    }
  }
}

module.exports = merge(config.all, config[config.all.env])
export default exports
