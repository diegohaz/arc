import React, { PropTypes } from 'react'
import Radium from 'radium'

const TableCell = ({ style, heading, children, ...props }) => {
  style = [styles.base({ heading }), style]
  return React.createElement(heading ? 'th' : 'td', { ...props, style }, children)
}

TableCell.propTypes = {
  style: PropTypes.object,
  heading: PropTypes.bool,
  children: PropTypes.any
}

const styles = {
  base: ({ heading }) => ({
    textAlign: 'left',
    padding: '0.75rem'
  })
}

export default Radium(TableCell)
