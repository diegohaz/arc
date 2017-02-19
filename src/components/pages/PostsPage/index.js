import React from 'react'
import Helmet from 'react-helmet'

import { PageTemplate, Header, Footer, Heading, Button } from 'components'
import { PostList } from 'containers'

const PostsPage = () => {
  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Helmet title="Posts Page" />
      <Heading style={{ textAlign: 'center' }}>
        Posts <Button height={34} style={{ float: 'right' }} to="/posts/create">Create Post</Button>
      </Heading>
      <PostList limit={15} />
    </PageTemplate>
  )
}

export default PostsPage
