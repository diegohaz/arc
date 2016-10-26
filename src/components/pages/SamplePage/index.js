import React from 'react'
import Helmet from 'react-helmet'

import { PageTemplate, Header, Footer } from 'components'
import { PostForm, PostList } from 'containers'

const SamplePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Helmet title="Sample Page" />
      <PostForm />
      <PostList limit={15} />
    </PageTemplate>
  )
}

export default SamplePage
