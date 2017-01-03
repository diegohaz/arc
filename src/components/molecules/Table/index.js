import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { get, getColor } from 'arc-theme'

import { Caption } from 'components'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)
export const borderColor = ({ theme, reverse }) => getColor('grayscale[1]', !reverse, theme)
export const color = ({ theme, reverse }) => getColor('grayscale[0]', reverse, theme)

const StyledTable = styled.table`
  font-family: ${fontFamily};
  border-collapse: collapse;
  width: 100%;
  border: 1px solid ${borderColor};
  color: ${color};
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
  children: PropTypes.any,
  reverse: PropTypes.bool
}

export default Table
