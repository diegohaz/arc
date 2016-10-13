import React, { PropTypes } from 'react'
import Radium from 'radium'

import logo from '!url!./logo.svg'

const LogoImage = ({ style, ...props }) => {
  return (
    <img alt="Logo" width="100" {...props} src={logo} style={[styles.base, style]} />
  )
}

LogoImage.propTypes = {
  style: PropTypes.object
}

const styles = {
  base: {}
}

export default Radium(LogoImage)
