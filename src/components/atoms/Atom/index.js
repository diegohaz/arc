import { PropTypes } from 'react'
import styled from 'styled-components'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)
export const color = ({ theme, reverse, color }) =>
  getColor([color, color === 'grayscale' ? 0 : 1], reverse, theme)

const Atom = styled.span`
  font-family: ${fontFamily};
  color: ${color};
`

Atom.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Atom.defaultProps = {
  color: 'grayscale'
}

export default Atom
