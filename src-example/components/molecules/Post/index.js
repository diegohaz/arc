import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Heading, Paragraph } from 'components'

const Article = styled.article``

const Post = ({ title, body, commentCount, ...props }) => {
  return (
    <Article {...props}>
      <Heading level={2}>{title} {commentCount !== 0 && `(${commentCount})`}</Heading>
      <Paragraph>{body}</Paragraph>
    </Article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  commentCount: PropTypes.number.isRequired,
}

export default Post
