import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import { Router, browserHistory, applyRouterMiddleware } from 'react-router'
import { useScroll } from 'react-router-scroll'
import configureStore from 'store/configure'

import routes from 'routes'

const store = configureStore()
const root = document.getElementById('app')

const renderApp = () => (
  <AppContainer>
    <Provider store={store}>
      <Router
        history={browserHistory}
        routes={routes}
        render={applyRouterMiddleware(useScroll())} />
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
