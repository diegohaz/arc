import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

import { PageTemplate, Header, Footer } from 'components'
import { PostForm } from 'containers'

const PostUpdatePage = ({ id }) => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Helmet title="Post Update Page" />
      <PostForm id={id} />
    </PageTemplate>
  )
}

PostUpdatePage.propTypes = {
  id: PropTypes.number.isRequired
}

export default PostUpdatePage
