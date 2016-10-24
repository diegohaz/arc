import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, HomePage } from 'components'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
  </Route>
)

export default routes
