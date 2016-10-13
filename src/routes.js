import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { HomePage } from 'components'

const routes = (
  <Route path="/">
    <IndexRoute component={HomePage} />
  </Route>
)

export default routes
