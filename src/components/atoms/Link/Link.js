import { PropTypes } from 'react'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router'

import { colors, fonts } from 'components/globals'

const Link = styled(RouterLink)`
  font-family: ${fonts.primary};
  text-decoration: none;
  font-weight: 500;
  color: ${(props) => colors[props.kind][1]};

  &:hover {
    text-decoration: underline;
  }
`

Link.propTypes = {
  kind: PropTypes.oneOf(Object.keys(colors))
}

Link.defaultProps = {
  kind: 'primary'
}

export default Link
