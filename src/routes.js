import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from 'components/App'
import { HomePage } from 'components'
import { SamplePage, PostsPage, PostPage, PostCreatePage, PostUpdatePage, NotFoundPage } from 'containers'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="/sample-page" component={SamplePage} />
    <Route path="/posts">
      <IndexRoute component={PostsPage} />
      <Route path="create" component={PostCreatePage} />
      <Route path=":id" component={PostPage} />
      <Route path=":id/update" component={PostUpdatePage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Route>
)

export default routes
