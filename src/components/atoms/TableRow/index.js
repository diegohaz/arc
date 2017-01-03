import { PropTypes } from 'react'
import styled from 'styled-components'
import { reverseColor } from 'arc-theme'

const backgroundColor = ({ filled }) => reverseColor('grayscale', filled ? 1 : 0)

const TableRow = styled.tr`
  background-color: ${backgroundColor};
`

TableRow.propTypes = {
  filled: PropTypes.bool,
  reverse: PropTypes.bool
}

export default TableRow
