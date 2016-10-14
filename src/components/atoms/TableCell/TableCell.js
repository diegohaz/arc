import React, { PropTypes } from 'react'
import styled from 'styled-components'

const TableCell = styled(({ heading, children, ...props }) => {
  return React.createElement(heading ? 'th' : 'td', props, children)
})`
  text-align: left;
  padding: 0.75rem;
`

TableCell.propTypes = {
  heading: PropTypes.bool,
  children: PropTypes.any
}

export default TableCell
