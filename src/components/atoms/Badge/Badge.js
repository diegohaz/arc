import { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'

const Badge = styled.span`
  font-family: ${fonts.primary};
  font-size: 0.75rem;
  line-height: 1.5em;
  padding: 0 0.3em;
  color: #fff;
  background-color: ${(props) => colors[props.kind][1]};
  border-radius: 0.16667em;
`

Badge.propTypes = {
  kind: PropTypes.oneOf(Object.keys(colors))
}

Badge.defaultProps = {
  kind: 'primary'
}

export default Badge
