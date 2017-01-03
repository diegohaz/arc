import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color } from 'arc-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${color('grayscale', 0)};
`

const Molecule = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

Molecule.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node
}

export default Molecule
