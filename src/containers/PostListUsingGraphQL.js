import { PostList } from 'components'
import gql from 'graphql-tag'
import React, { PropTypes } from 'react'
import { compose, graphql } from 'react-apollo'

function PostListUsingGraphQL(props) {
  const { fetchedPosts, postsLoading } = props
  return <PostList list={fetchedPosts} loading={postsLoading} />
}

PostListUsingGraphQL.propTypes = {
  postsLoading: React.PropTypes.bool,
  fetchedPosts: React.PropTypes.arrayOf(React.PropTypes.object),
  limit: PropTypes.number,
}

PostListUsingGraphQL.defaultProps = {
  limit: 20
}

const fetchPosts = gql`
query fetchPosts {
posts {
    id
    title
    body
  }
}`

export default compose(
  graphql(fetchPosts, {
    props: (ownProps) => {
      const { data: { loading, posts } } = ownProps
      return {
        postsLoading: loading,
        fetchedPosts: posts
      }
    },
  })
)(PostListUsingGraphQL)
