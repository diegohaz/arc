import React from 'react'
import Helmet from 'react-helmet'

import { GraphQLImage, Footer, Header, PageTemplate } from 'components'
import { PostFormUsingGraphQL, PostListUsingGraphQL } from '.'

const SamplePage = () => {

  return (
    <PageTemplate header={<Header />} footer={<Footer />}>
      <Helmet title="Sample Page" />
      <GraphQLImage height={130} /> <br />GraphQL Powered
      <PostFormUsingGraphQL />
      <PostListUsingGraphQL />
    </PageTemplate>
  )

}

export default SamplePage
