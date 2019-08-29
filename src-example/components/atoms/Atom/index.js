import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { font, palette } from 'styled-theme'

const StyledAtom = styled.span`
  font-family: ${font('primary')};
  color: ${palette({ grayscale: 0 }, 1)};
`

StyledAtom.propTypes = {
  palette: PropTypes.string,
  reverse: PropTypes.bool,
}

StyledAtom.defaultProps = {
  palette: 'grayscale',
}

const Atom = ({ ...props }) => {
  return (
    <StyledAtom {...props} />
  )
}

export default Atom
