import { PropTypes } from 'react'
import styled from 'styled-components'
import { getColor } from 'arc-theme'

export const backgroundColor = ({ theme, filled, reverse }) =>
  getColor(['grayscale', filled ? 1 : 0], !reverse, theme)

const TableRow = styled.tr`
  background-color: ${backgroundColor};
`

TableRow.propTypes = {
  filled: PropTypes.bool,
  reverse: PropTypes.bool
}

export default TableRow
