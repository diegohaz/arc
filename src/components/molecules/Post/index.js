import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors } from 'components/globals'
import { Heading, Paragraph } from 'components'

const Article = styled.article``

const Placeholder = styled.span`
  color: ${(props) => [ ...colors.grayscale ].reverse()[props.darkness]};
  background-color: currentcolor;
`

const Post = ({ title, body, loading, ...props }) => {
  return (
    <Article {...props}>
      <Heading level={2}>
        {loading && <Placeholder darkness={2}>{title}</Placeholder> || title}
      </Heading>
      <Paragraph>
        {loading && <Placeholder darkness={1}>{body}</Placeholder> || body}
      </Paragraph>
    </Article>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  loading: PropTypes.bool
}

export default Post
