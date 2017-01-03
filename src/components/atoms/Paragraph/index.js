import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color } from 'arc-theme'

const Paragraph = styled.p`
  font-family: ${font('primary')};
  color: ${color('grayscale', 0)};
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`

Paragraph.propTypes = {
  reverse: PropTypes.bool
}

export default Paragraph
