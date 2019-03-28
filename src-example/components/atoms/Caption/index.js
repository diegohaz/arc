import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledCaption = styled.caption`
  font-family: ${font('primary')};
  color: ${palette('grayscale', 1)};
  font-weight: 500;
  line-height: 2rem;
  font-size: 0.875rem;
  text-transform: uppercase;
`

StyledCaption.propTypes = {
  reverse: PropTypes.bool,
}

const Caption = ({ ...props }) => {
  return (
    <StyledCaption {...props} />
  )
}


export default Caption
