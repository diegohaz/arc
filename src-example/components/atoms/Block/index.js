import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const StyledBlock = styled.div`
  font-family: ${font('primary')};
  background-color: ${ifProp('opaque', palette(0, true), 'transparent')};
  color: ${palette({ grayscale: 0 }, 1)};
`

StyledBlock.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
  opaque: PropTypes.bool,
}

StyledBlock.defaultProps = {
  palette: 'grayscale',
}

const Block = ({ ...props }) => {
  return (
    <StyledBlock {...props} />
  )
}

export default Block
