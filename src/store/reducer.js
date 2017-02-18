import camelCase from 'lodash/camelCase'
import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { getClient } from './apollo'

const reducers = {
  routing,
  apollo: getClient().reducer()
}

const req = require.context('.', true, /\.\/.+\/reducer\.js$/)

req.keys().forEach((key) => {
  const storeName = camelCase(key.replace(/\.\/(.+)\/.+$/, '$1'))
  reducers[storeName] = req(key).default
})

export default combineReducers(reducers)
