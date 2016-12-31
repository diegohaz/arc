import merge from 'lodash/merge'

const browser = typeof window !== 'undefined'

const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    apiUrl: `https://jsonplaceholder.typicode.com`,
    fbAppId: '991453140998882',
    googleClientId: '464712936089-q953apdu1bjiqtcjndktnnk1ts4f2cgv.apps.googleusercontent.com',
    browser
  },
  test: {},
  development: {},
  production: {
    apiUrl: 'https://jsonplaceholder.typicode.com'
  }
}

module.exports = merge(config.all, config[config.all.env])
export default module.exports
