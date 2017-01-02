import { PropTypes } from 'react'
import styled from 'styled-components'

export const fontFamily = ({ theme }) => theme.fonts.primary

export const color = ({ theme, reverse, color }) =>
  theme[reverse ? 'reverseColors' : 'colors'][color][color === 'grayscale' ? 0 : 1]

const Atom = styled.span`
  font-family: ${fontFamily};
  color: ${color};
`

Atom.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Atom.defaultProps = {
  color: 'grayscale',
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

export default Atom
