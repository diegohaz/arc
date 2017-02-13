import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { createHistory } from 'history'
import { Router, useRouterHistory } from 'react-router'

import routes from 'routes'

const root = document.getElementById('app')
const history = useRouterHistory(createHistory)({ basename: process.env.PUBLIC_PATH })

const renderApp = () => (
  <AppContainer>
    <Router history={history} routes={routes} />
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('routes', () => {
    require('routes')
    render(renderApp(), root)
  })
}
