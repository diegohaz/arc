import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { palette } from 'styled-theme'

export const backgroundColor = ({ filled }) => palette('grayscale', filled ? 1 : 0, true)

const StyledTableRow = styled.tr`
  background-color: ${backgroundColor};
`

StyledTableRow.propTypes = {
  filled: PropTypes.bool,
  reverse: PropTypes.bool,
}

const TableRow = ({ ...props }) => {
  return (
    <StyledTableRow {...props} />
  )
}

export default TableRow
