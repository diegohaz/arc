import { PropTypes } from 'react'
import styled from 'styled-components'

export const fontFamily = ({ theme }) => theme.fonts.primary

export const color = ({ theme, reverse }) =>
  theme[reverse ? 'reverseColors' : 'colors'].grayscale[1]

const Caption = styled.caption`
  font-family: ${fontFamily};
  color: ${color};
  font-weight: 500;
  line-height: 2rem;
  font-size: 0.875rem;
  text-transform: uppercase;
`

Caption.propTypes = {
  reverse: PropTypes.bool
}

Caption.defaultProps = {
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 1: '#555' }
    },
    reverseColors: {
      grayscale: { 1: '#bbb' }
    }
  }
}

export default Caption
