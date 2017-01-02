import { PropTypes } from 'react'
import styled from 'styled-components'

export const fontFamily = ({ theme }) => theme.fonts.primary

export const color = ({ reverse, theme }) =>
  reverse ? theme.colors.grayscale[0] : theme.reverseColors.grayscale[0]

export const backgroundColor = ({ reverse, theme, color }) =>
  theme[reverse ? 'reverseColors' : 'colors'][color][1]

const Badge = styled.span`
  font-family: ${fontFamily};
  font-size: 0.75rem;
  line-height: 1.5em;
  padding: 0 0.3em;
  color: ${color};
  background-color: ${backgroundColor};
  border-radius: 0.16667em;
`

Badge.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Badge.defaultProps = {
  color: 'primary',
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 0: '#222', 1: '#555' },
      primary: { 1: '#2196f3' }
    },
    reverseColors: {
      grayscale: { 0: '#fff', 1: '#bbb' },
      primary: { 1: '#71bcf7' }
    }
  }
}

export default Badge
