import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage } from 'components'
import { SamplePageUsingAPI, SamplePageUsingGraphQL, NotFoundPage } from 'containers'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/sample-page" component={SamplePageUsingAPI} />
    <Route path="/graphql-page" component={SamplePageUsingGraphQL} />
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
