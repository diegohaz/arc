import { PropTypes } from 'react'
import styled from 'styled-components'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)

export const backgroundColor = ({ theme, reverse, color, transparent }) =>
  transparent ? 'transparent' : getColor([color, 0], !reverse, theme)

export const color = ({ theme, reverse, color }) =>
  getColor([color, color === 'grayscale' ? 0 : 1], reverse, theme)

const Block = styled.div`
  font-family: ${fontFamily};
  background-color: ${backgroundColor};
  color: ${color};
`

Block.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Block.defaultProps = {
  color: 'grayscale'
}

export default Block
