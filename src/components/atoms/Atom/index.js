import { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color } from 'arc-theme'

const Atom = styled.span`
  font-family: ${font('primary')};
  color: ${color({ grayscale: 0 }, 1)};
`

Atom.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Atom.defaultProps = {
  color: 'grayscale'
}

export default Atom
