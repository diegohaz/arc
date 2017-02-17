import React from 'react'
import Helmet from 'react-helmet'

import { PageTemplate, Header, Footer } from 'components'
import { PostForm } from 'containers'

const PostCreatePage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Helmet title="Post Create Page" />
      <PostForm />
    </PageTemplate>
  )
}

export default PostCreatePage
