import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'

const List = styled(({ ordered, children, ...props }) => {
  return React.createElement(ordered ? 'ol' : 'ul', props, children)
})`
  font-family: ${fonts.primary};
  margin: 1rem 0;
  padding-left: 1.6rem;
  line-height: 1.7rem;
  color: ${colors.grayscale[0]}
`

List.propTypes = {
  ordered: PropTypes.bool,
  children: PropTypes.any
}

export default List
