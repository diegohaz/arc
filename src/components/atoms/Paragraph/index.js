import { PropTypes } from 'react'
import styled from 'styled-components'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)
export const color = ({ theme, reverse }) => getColor('grayscale[0]', reverse, theme)

const Paragraph = styled.p`
  font-family: ${fontFamily};
  color: ${color};
  font-size: 1rem;
  line-height: 1.3;
  margin: 1rem 0 0;
`

Paragraph.propTypes = {
  reverse: PropTypes.bool
}

export default Paragraph
