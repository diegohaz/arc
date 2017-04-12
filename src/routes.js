import React from 'react'
import { Switch } from 'react-router'
import { renderRoutes } from 'react-router-config'

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
      {renderRoutes(routes)}
    </Switch>
  </App>
)

export default AppRoutes
