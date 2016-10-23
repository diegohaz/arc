import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Post } from 'components'

const Wrapper = styled.div`
  & > * {
    margin: 1rem;
  }
`

const PostList = ({ list, loading, ...props }) => {
  return (
    <Wrapper {...props}>
      {list.map((post, i) => <Post key={i} loading={loading} {...post} />)}
    </Wrapper>
  )
}

PostList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool
}

export default PostList
