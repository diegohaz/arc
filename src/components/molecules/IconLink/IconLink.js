import React, { PropTypes } from 'react'
import Radium from 'radium'

import { Icon, Link } from 'components'

const IconLink = ({ style, icon, right, responsive, children, ...props }) => {
  const iconElement = (
    <Icon size={16} icon={icon} style={styles.icon({ right, children, responsive })} />
  )
  return (
    <Link {...props} style={{ ...styles.base, ...style }}>
      {right || iconElement}
      <span style={styles.children({ responsive })}>{children}</span>
      {right && iconElement}
    </Link>
  )
}

IconLink.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.string.isRequired,
  right: PropTypes.bool,
  responsive: PropTypes.bool,
  children: PropTypes.any
}

const styles = {
  base: {
    display: 'inline-flex',
    alignItems: 'center'
  },
  children: ({ responsive }) => ({
    ...responsive && {
      '@media screen and (max-width: 420px)': {
        display: 'none'
      }
    }
  }),
  icon: ({ right, children, responsive }) => ({
    margin: children ? (right ? '0 0 0 0.3rem' : '0 0.3rem 0 0') : 0,
    ...responsive && {
      '@media screen and (max-width: 420px)': {
        margin: 0
      }
    }
  })
}

export default Radium(IconLink)
