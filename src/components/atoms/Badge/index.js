import { PropTypes } from 'react'
import styled from 'styled-components'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)
export const color = ({ reverse, theme }) => getColor('grayscale[0]', !reverse, theme)
export const backgroundColor = ({ reverse, theme, color }) => getColor([color, 1], reverse, theme)

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
  color: 'primary'
}

export default Badge
