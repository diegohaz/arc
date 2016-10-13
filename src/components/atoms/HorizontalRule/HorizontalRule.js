import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors } from 'components'

const HorizontalRule = ({ style, ...props }) => {
  return (
    <hr {...props} style={[styles.base, style]} />
  )
}

HorizontalRule.propTypes = {
  style: PropTypes.object
}

const styles = {
  base: {
    borderColor: colors.grayscale[4],
    borderStyle: 'solid',
    borderWidth: '0 0 1px'
  }
}

export default Radium(HorizontalRule)
