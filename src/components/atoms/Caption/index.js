import { PropTypes } from 'react'
import styled from 'styled-components'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)
export const color = ({ theme, reverse }) => getColor('grayscale[1]', reverse, theme)

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

export default Caption
