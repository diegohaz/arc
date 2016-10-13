import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors } from 'components'

const TableRow = ({ style, filled, children, ...props }) => {
  const cx = [styles.base({ filled }), style]
  return <tr {...props} style={cx}>{children}</tr>
}

TableRow.propTypes = {
  style: PropTypes.object,
  filled: PropTypes.bool,
  children: PropTypes.any
}

const styles = {
  base: ({ filled }) => ({
    backgroundColor: [ ...colors.grayscale ].reverse()[filled ? 1 : 0]
  })
}

export default Radium(TableRow)
