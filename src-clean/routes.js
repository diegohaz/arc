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
      {routes.map((route) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => (
            <route.component {...props} route={route} />
          )}
        />
      ))}
    </Switch>
  </App>
)

export default AppRoutes
