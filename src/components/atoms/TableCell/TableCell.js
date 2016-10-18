import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

const styles = css`
  text-align: left;
  padding: 0.75rem;
`

const Th = styled.th`${styles}`
const Td = styled.td`${styles}`

const TableCell = ({ heading, children, ...props }) => {
  return React.createElement(heading ? Th : Td, props, children)
}

TableCell.propTypes = {
  heading: PropTypes.bool,
  children: PropTypes.any
}

export default TableCell
