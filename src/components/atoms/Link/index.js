import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)

export const color = ({ theme, reverse, color }) =>
  getColor([color, color === 'grayscale' ? 0 : 1], reverse, theme)

const styles = css`
  font-family: ${fontFamily};
  text-decoration: none;
  font-weight: 500;
  color: ${color};

  &:hover {
    text-decoration: underline;
  }
`

const StyledLink = styled(({ theme, reverse, color, ...props }) =>
  <RouterLink {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`

const Link = ({ ...props, to }) => {
  if (to) {
    return <StyledLink {...props} />
  }
  return <Anchor {...props} />
}

Link.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool,
  to: PropTypes.string
}

Link.defaultProps = {
  color: 'primary'
}

export default Link
