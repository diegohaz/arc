import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components'

const Heading = styled(({ level, children, ...props }) => {
  return React.createElement(`h${level}`, props, children)
})`
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: ${(props) => 0.75 + 1 * (1 / props.level)}rem;
  margin: 0;
  margin-top: ${(props) => 1 + 0.5 * (1 / props.level)}rem;
  margin-bottom: ${(props) => 0.5 + 0.5 * (1 / props.level)}rem;
  color: ${colors.grayscale[0]}
`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.any
}

Heading.defaultProps = {
  level: 1
}

export default Heading
