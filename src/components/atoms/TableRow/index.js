import { PropTypes } from 'react'
import styled from 'styled-components'

import { reverseColors } from 'components/globals'

const TableRow = styled.tr`
  background-color: ${(props) => reverseColors.grayscale[props.filled ? 1 : 0]};
`

TableRow.propTypes = {
  filled: PropTypes.bool
}

export default TableRow
