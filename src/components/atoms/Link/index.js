import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'

export const fontFamily = ({ theme }) => theme.fonts.primary

export const color = ({ theme, reverse, color }) =>
  theme[reverse ? 'reverseColors' : 'colors'][color][color === 'grayscale' ? 0 : 1]

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
  color: 'primary',
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 0: '#222' },
      primary: { 1: '#2196f3' }
    },
    reverseColors: {
      grayscale: { 0: '#fff' },
      primary: { 1: '#71bcf7' }
    }
  }
}

export default Link
