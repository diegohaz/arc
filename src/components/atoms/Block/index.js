import { PropTypes } from 'react'
import styled from 'styled-components'

export const fontFamily = ({ theme }) => theme.fonts.primary

export const backgroundColor = ({ theme, reverse, color, transparent }) =>
  transparent ? 'transparent' : theme[reverse ? 'colors' : 'reverseColors'][color][0]

export const color = ({ theme, reverse, color }) =>
  theme[reverse ? 'reverseColors' : 'colors'][color][color === 'grayscale' ? 0 : 1]

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

export default Block
