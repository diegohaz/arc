import React, { PropTypes } from 'react'
import Radium from 'radium'

import { Icon, Button } from 'components'

const IconButton = ({ icon, right, responsive, children, ...props }) => {
  const iconElement = (
    <Icon size={16} icon={icon} style={styles.icon({ right, children, responsive })} />
  )
  return (
    <Button {...props}>
      {right || iconElement}
      <span style={styles.children({ responsive })}>{children}</span>
      {right && iconElement}
    </Button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.any
}

const styles = {
  children: ({ responsive }) => ({
    ...responsive && {
      '@media screen and (max-width: 420px)': {
        display: 'none'
      }
    }
  }),
  icon: ({ right, children, responsive }) => ({
    margin: children ? (right ? '0 0 0 0.5rem' : '0 0.5rem 0 0') : 0,
    ...responsive && {
      '@media screen and (max-width: 420px)': {
        margin: 0
      }
    }
  })
}

export default Radium(IconButton)
