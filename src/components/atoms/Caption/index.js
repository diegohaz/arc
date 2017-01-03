import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color } from 'arc-theme'

const Caption = styled.caption`
  font-family: ${font('primary')};
  color: ${color('grayscale', 1)};
  font-weight: 500;
  line-height: 2rem;
  font-size: 0.875rem;
  text-transform: uppercase;
`

Caption.propTypes = {
  reverse: PropTypes.bool
}

export default Caption
