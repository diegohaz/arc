import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { font, color, reverseColor } from 'arc-theme'

import { Caption } from 'components'

const StyledTable = styled.table`
  font-family: ${font('primary')};
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${reverseColor('grayscale', 1)};
  color: ${color('grayscale', 0)};
`

const Table = ({ caption, head, foot, children, ...props, reverse }) => {
  return (
    <StyledTable {...props}>
      {caption && <Caption reverse={reverse}>{caption}</Caption>}
      {head && <thead>{head}</thead>}
      {foot && <tfoot>{foot}</tfoot>}
      <tbody>{children}</tbody>
    </StyledTable>
  )
}

Table.propTypes = {
  caption: PropTypes.string,
  head: PropTypes.any,
  foot: PropTypes.any,
  children: PropTypes.any,
  reverse: PropTypes.bool
}

export default Table
