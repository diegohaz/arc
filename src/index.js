import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { AppContainer } from 'react-hot-loader'
import routes from './routes'

const root = document.getElementById('app')

const renderApp = (routes) => (
  <AppContainer>
    <Router history={browserHistory} routes={routes} />
  </AppContainer>
)

render(renderApp(routes), root)

if (module.hot) {
  module.hot.accept('./routes', () => {
    require('./routes')
    render(renderApp(routes), root)
  })
}
