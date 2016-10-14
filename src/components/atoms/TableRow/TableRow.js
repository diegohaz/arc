import { PropTypes } from 'react'
import styled from 'styled-components'

import { colors } from 'components'

const TableRow = styled.tr`
  background-color: ${(props) => [ ...colors.grayscale ].reverse()[props.filled ? 1 : 0]}
`

TableRow.propTypes = {
  filled: PropTypes.bool
}

export default TableRow
