import React, { PropTypes } from 'react'
import Radium from 'radium'

import { LogoImage, Link } from 'components'

const LogoLink = ({ style, width, height, ...props }) => {
  width = width || (height ? undefined : 80)
  return (
    <Link href="#" {...props} style={{ ...styles.base, ...style }}>
      <LogoImage width={width} height={height} />
    </Link>
  )
}

LogoLink.propTypes = {
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

const styles = {
  base: {
    ':hover': {
      textDecoration: 'none'
    }
  }
}

export default Radium(LogoLink)
