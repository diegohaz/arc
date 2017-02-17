import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

import { PageTemplate, Header, Footer } from 'components'
import { Post } from 'containers'

const PostPage = ({ id }) => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Helmet title="Post Page" />
      <Post id={id} />
    </PageTemplate>
  )
}

PostPage.propTypes = {
  id: PropTypes.any.isRequired
}

export default PostPage
