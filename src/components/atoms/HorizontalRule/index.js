import { PropTypes } from 'react'
import styled from 'styled-components'

export const borderColor = ({ theme, reverse, color }) =>
  theme[reverse ? 'colors' : 'reverseColors'][color][1]

const HorizontalRule = styled.hr`
  border: 1px solid ${borderColor};
  border-width: 0 0 1px;
  width: 100%;
`

HorizontalRule.propTypes = {
  color: PropTypes.string,
  reverse: PropTypes.bool
}

HorizontalRule.defaultProps = {
  color: 'grayscale',
  theme: {
    colors: {
      grayscale: { 1: '#555' }
    },
    reverseColors: {
      grayscale: { 1: '#eee' }
    }
  }
}

export default HorizontalRule
