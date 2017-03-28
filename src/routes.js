import React from 'react'
import { Route, Switch } from 'react-router'

import App from 'components/App'
import { HomePage } from 'components'
import { SamplePage, NotFoundPage } from 'containers'

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/sample-page',
    component: SamplePage,
  },
  {
    path: '*',
    component: NotFoundPage,
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
