import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link as RouterLink } from 'react-router'

import { colors, fonts } from 'components/globals'

const styles = css`
  font-family: ${fonts.primary};
  text-decoration: none;
  font-weight: 500;
  color: ${(props) => colors[props.kind][1]};

  &:hover {
    text-decoration: underline;
  }
`

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
  to: PropTypes.string
}

Link.defaultProps = {
  kind: 'primary'
}

export default Link
