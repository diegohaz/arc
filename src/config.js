const merge = require('lodash/merge')

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    isDev: process.env.NODE_ENV !== 'production',
    basename: process.env.PUBLIC_PATH,
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000,
    isBrowser: typeof window !== 'undefined',
    isServer: typeof window === 'undefined',
    apiUrl: `http://${process.env.HOST || 'localhost'}:${process.env.PORT || 3000}/api`,
    mongo: {
      options: {
        db: {
          safe: true,
        },
      },
    },
  },
  test: {
    mongo: {
      uri: `mongodb://${process.env.HOST || 'localhost'}/arc-test`,
      options: {
        debug: false,
      },
    },
  },
  development: {
    mongo: {
      uri: `mongodb://${process.env.HOST || 'localhost'}/arc-dev`,
      options: {
        debug: true,
      },
    },
  },
  production: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8080,
    apiUrl: 'https://jsonplaceholder.typicode.com',
    mongo: {
      uri: process.env.MONGODB_URI || 'mongodb://localhost/arc',
    },
  },
}

module.exports = merge(config.all, config[config.all.env])
