import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors, fonts } from 'components'

const Paragraph = ({ style, children, ...props }) => {
  return (
    <p {...props} style={[styles.base, style]}>{children}</p>
  )
}

Paragraph.propTypes = {
  style: PropTypes.object,
  children: PropTypes.any
}

const styles = {
  base: {
    fontFamily: fonts.primary,
    color: colors.grayscale[0],
    fontSize: '1rem',
    lineHeight: 1.3,
    margin: '1rem 0 0'
  }
}

export default Radium(Paragraph)
