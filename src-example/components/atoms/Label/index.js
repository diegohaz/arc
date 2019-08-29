import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledLabel = styled.label`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  font-size: 1rem;
  line-height: 2em;
`

StyledLabel.propTypes = {
  reverse: PropTypes.bool,
}

const Label = ({ ...props }) => {
  return (
    <StyledLabel {...props} />
  )
}

export default Label
