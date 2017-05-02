// https://github.com/diegohaz/arc/wiki/Example-app
import 'react-hot-loader/patch'
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { basename } from 'config'
import configureStore from 'store/configure'
import api from 'services/api'
import App from 'components/App'

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState, { api: api.create() })

const renderApp = () => (
  <Provider store={store}>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </Provider>
)

const root = document.getElementById('app')
render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components/App', () => {
    require('components/App')
    render(renderApp(), root)
  })
}
