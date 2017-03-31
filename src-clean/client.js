import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'
import configureStore from 'store/configure'
import { basename } from 'config'

import AppRoutes from 'routes'

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__
const history = createHistory({ basename })
const store = configureStore(initialState, history)
const root = document.getElementById('app')

const renderApp = () => (
  <AppContainer>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppRoutes />
      </ConnectedRouter>
    </Provider>
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}
