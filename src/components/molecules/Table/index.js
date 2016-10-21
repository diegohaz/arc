import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { colors, fonts } from 'components/globals'

const Caption = styled.caption`
  font-weight: 500;
  line-height: 2rem;
  font-size: 0.875rem;
  color: ${colors.grayscale[1]};
  text-transform: uppercase;
`

const StyledTable = styled.table`
  font-family: ${fonts.primary};
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${[ ...colors.grayscale ].reverse()[1]};
  color: ${colors.grayscale[0]};
`

const Table = ({ caption, head, foot, children, ...props }) => {
  return (
    <StyledTable {...props}>
      {caption && <Caption>{caption}</Caption>}
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
  children: PropTypes.any
}

export default Table
