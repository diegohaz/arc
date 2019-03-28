import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledParagraph = styled.p`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 0)};
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`

StyledParagraph.propTypes = {
  reverse: PropTypes.bool,
}

const Paragraph = ({ ...props }) => {
  return (
    <StyledParagraph {...props} />
  )
}

export default Paragraph
