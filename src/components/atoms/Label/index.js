import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color } from 'arc-theme'

const Label = styled.label`
  font-family: ${font('primary')};
  color: ${color('grayscale', 1)};
  font-size: 1rem;
  line-height: 2em;
`

Label.propTypes = {
  reverse: PropTypes.bool
}

export default Label
