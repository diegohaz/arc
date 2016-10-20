import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'

import { colors, fonts } from 'components/globals'

const styles = ({ light, kind }) => {
  const color = light ? [ ...colors[kind] ].reverse()[1] : colors[kind][1]
  return css`
    font-family: ${fonts.primary};
    text-decoration: none;
    font-weight: 500;
    color: ${color};

    &:hover {
      text-decoration: underline;
    }
  `
}

const StyledLink = styled(RouterLink)`${styles}`
const Anchor = styled.a`${styles}`

const Link = ({ ...props, to }) => {
  if (to) {
    return <StyledLink {...props} />
  }
  return <Anchor {...props} />
}

Link.propTypes = {
  kind: PropTypes.oneOf(Object.keys(colors)),
  light: PropTypes.bool,
  to: PropTypes.string
}

Link.defaultProps = {
  kind: 'primary'
}

export default Link
