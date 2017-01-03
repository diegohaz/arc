import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)
export const color = ({ theme, reverse }) => getColor('grayscale[0]', reverse, theme)

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

export default Organism
