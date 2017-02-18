import React from 'react'
import Helmet from 'react-helmet'

import { PageTemplate, Header, Footer } from 'components'
import { PostFormUsingAPI, PostListUsingAPI } from 'containers'

function SamplePageContainer() {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Helmet title="GraphQL Page" />
      <PostFormUsingAPI />
      <PostListUsingAPI limit={15} />
    </PageTemplate>
  )
}

export default SamplePageContainer
