import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Caption } from 'components'

export const fontFamily = ({ theme }) => theme.fonts.primary

export const borderColor = ({ theme, reverse }) =>
  theme[reverse ? 'colors' : 'reverseColors'].grayscale[1]

export const color = ({ theme, reverse }) =>
  theme[reverse ? 'reverseColors' : 'colors'].grayscale[0]

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

Table.defaultProps = {
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 0: '#222', 1: '#5555' }
    },
    reverseColors: {
      grayscale: { 0: '#fff', 1: '#bbb' }
    }
  }
}

export default Table
