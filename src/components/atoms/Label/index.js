import { PropTypes } from 'react'
import styled from 'styled-components'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)
export const color = ({ theme, reverse }) => getColor('grayscale[1]', reverse, theme)

const Label = styled.label`
  font-family: ${fontFamily};
  color: ${color};
  font-size: 1rem;
  line-height: 2em;
`

Label.propTypes = {
  reverse: PropTypes.bool
}

export default Label
