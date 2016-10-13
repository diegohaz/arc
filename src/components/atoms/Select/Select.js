import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors } from 'components'

const Select = ({ invalid, style, children, ...props }) => {
  return (
    <select {...props} style={[styles.base({ invalid }), style]}>
      {children}
    </select>
  )
}

Select.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any,
  invalid: PropTypes.bool
}

const styles = {
  base: ({ invalid }) => ({
    display: 'block',
    width: '100%',
    color: 'inherit',
    margin: 0,
    boxSizing: 'border-box',
    fontSize: '1.125rem',
    border: `1px solid ${invalid ? colors.danger[2] : colors.grayscale[3]}`,
    borderRadius: 2,
    height: '2.5rem',
    backgroundColor: '#ffffff'
  })
}

export default Radium(Select)
