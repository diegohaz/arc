import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Post } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const PostList = ({
  list, loading, failed, ...props
}) => {
  return (
    <Wrapper {...props}>
      {!list.length && loading && <div>Loading</div>}
      {failed && <div>Something went wrong while fetching posts. Please, try again later.</div>}
      {list.map(post => <Post key={post.id} {...post} />)}
    </Wrapper>
  )
}

PostList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool,
  failed: PropTypes.bool,
}

export default PostList
