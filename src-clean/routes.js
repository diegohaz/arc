import React from 'react'
import { Route, Switch } from 'react-router'

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
      {routes.map(route => (
        <Route key={route.path} {...route} />
      ))}
    </Switch>
  </App>
)

export default AppRoutes
