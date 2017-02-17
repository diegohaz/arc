import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Heading, Paragraph, Link } from 'components'

const Article = styled.article``

const Post = ({ id, title, body, ...props }) => {
  return (
    <Article {...props}>
      <Heading level={2}>{title}</Heading>
      <Paragraph>{body}</Paragraph>
      <Paragraph>
        <Link to={`/posts/${id}/update`}>Update</Link> <Link to={`/posts/${id}`}>View</Link>
      </Paragraph>
      <hr />
    </Article>
  )
}

Post.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired
}

export default Post
