import { PropTypes } from 'react'
import styled from 'styled-components'

export const backgroundColor = ({ theme, filled, reverse }) =>
  theme[reverse ? 'colors' : 'reverseColors'].grayscale[filled ? 1 : 0]

const TableRow = styled.tr`
  background-color: ${backgroundColor};
`

TableRow.propTypes = {
  filled: PropTypes.bool,
  reverse: PropTypes.bool
}

TableRow.defaultProps = {
  theme: {
    colors: {
      grayscale: { 0: '#222', 1: '#555' }
    },
    reverseColors: {
      grayscale: { 0: '#fff', 1: '#bbb' }
    }
  }
}

export default TableRow
