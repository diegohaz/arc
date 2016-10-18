import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { colors, fonts } from 'components/globals'

const styles = ({ level }) => css`
  font-family: ${fonts.primary};
  font-weight: 500;
  font-size: ${0.75 + 1 * (1 / level)}rem;
  margin: 0;
  margin-top: ${1 + 0.5 * (1 / level)}rem;
  margin-bottom: ${0.5 + 0.5 * (1 / level)}rem;
  color: ${colors.grayscale[0]};
`

const Heading = styled(({ level, children, ...props }) => {
  return React.createElement(`h${level}`, props, children)
})`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.any
}

Heading.defaultProps = {
  level: 1
}

export default Heading
