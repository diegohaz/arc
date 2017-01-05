import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color, reverseColor } from 'arc-theme'

const Badge = styled.span`
  font-family: ${font('primary')};
  font-size: 0.75rem;
  line-height: 1.5em;
  padding: 0.1em 0.3em;
  color: ${reverseColor('grayscale', 0)};
  background-color: ${color(1)};
  border-radius: 0.16667em;
`

Badge.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Badge.defaultProps = {
  color: 'primary'
}

export default Badge
