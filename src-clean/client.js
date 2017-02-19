import React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { AppContainer } from 'react-hot-loader'
import { createHistory } from 'history'
import { Router, useRouterHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import { basename } from './config'
import configureStore from './store/configure'
import { getClient } from './store/apollo'
import routes from './routes'
import { handleError } from './services/logger/index'

window.onerror = (msg, file, line, col, error) => { handleError(error) }
window.addEventListener('unhandledrejection', (event) => { handleError(event.reason) })

// eslint-disable-next-line no-underscore-dangle
const initialState = window.__INITIAL_STATE__
const baseHistory = useRouterHistory(createHistory)({ basename })
const store = configureStore(initialState, baseHistory)
const history = syncHistoryWithStore(baseHistory, store)
const root = document.getElementById('app')


function renderApp() {

  const apolloClient = getClient()
  return (
    <AppContainer>
      <ApolloProvider store={store} client={apolloClient}>
        <Router history={history} routes={routes} />
      </ApolloProvider>
    </AppContainer>
  )

}

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}
