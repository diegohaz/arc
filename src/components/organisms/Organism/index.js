import React, { PropTypes } from 'react'
import styled from 'styled-components'

export const fontFamily = ({ theme }) => theme.fonts.primary

export const color = ({ theme, reverse }) =>
  theme[reverse ? 'reverseColors' : 'colors'].grayscale[0]

const Wrapper = styled.div`
  font-family: ${fontFamily};
  color: ${color};
`

const Organism = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      {children}
    </Wrapper>
  )
}

Organism.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node
}

Organism.defaultProps = {
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 0: '#222' }
    },
    reverseColors: {
      grayscale: { 0: '#fff' }
    }
  }
}

export default Organism
