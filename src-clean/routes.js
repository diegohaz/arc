import React from 'react'
import { Switch } from 'react-router'
import { renderRoutes } from 'react-router-config'

import App from 'components/App'
import { HomePage } from 'components'

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
]

const AppRoutes = () => (
  <App>
    <Switch>
      {renderRoutes(routes)}
    </Switch>
  </App>
)

export default AppRoutes
