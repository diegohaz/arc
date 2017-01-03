import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { font, color } from 'arc-theme'

export const fontSize = ({ level }) => `${0.75 + 1 * (1 / level)}rem`

const styles = css`
  font-family: ${font('primary')};
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${color({ grayscale: 0 }, 1)};
`

const Heading = styled(({ level, children, reverse, theme, ...props }) => {
  return React.createElement(`h${level}`, props, children)
})`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Heading.defaultProps = {
  level: 1,
  color: 'grayscale'
}

export default Heading
