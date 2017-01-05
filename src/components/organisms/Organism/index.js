import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color } from 'arc-theme'

const Wrapper = styled.div`
  font-family: ${font('primary')};
  color: ${color('grayscale', 0)};
`

const Organism = (props) => {
  return (
    <Wrapper {...props}>content</Wrapper>
  )
}

Organism.propTypes = {
  reverse: PropTypes.bool
}

export default Organism
