import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Post } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const PostList = ({ posts, comments, loading, failed, ...props }) => {
  return (
    <Wrapper {...props}>
      {!posts.length && loading && <div>Loading</div>}
      {failed && <div>Something went wrong while fetching posts. Please, try again later.</div>}
      {posts.map(post => (<Post
        key={post.id}
        {...post}
        commentCount={comments.filter(comment => comment.postId === post.id).length}
      />))}
    </Wrapper>
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
  failed: PropTypes.bool,
}

export default PostList
