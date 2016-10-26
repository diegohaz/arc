import React from 'react'
import { Route, IndexRoute } from 'react-router'

import { App, HomePage } from 'components'
import { SamplePage } from 'containers'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/sample-page" component={SamplePage} />
  </Route>
)

export default routes
