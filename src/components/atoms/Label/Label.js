import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors, fonts } from 'components'

const Label = ({ style, children, ...props }) => {
  return (
    <label {...props} style={[styles.base, style]}>{children}</label>
  )
}

Label.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any
}

const styles = {
  base: {
    fontFamily: fonts.primary,
    fontSize: '1rem',
    lineHeight: '2rem',
    color: colors.grayscale[1]
  }
}

export default Radium(Label)
