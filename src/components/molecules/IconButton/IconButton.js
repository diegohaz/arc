import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Icon, Button } from 'components'

const IconButton = styled(({ icon, right, responsive, children, ...props }) => {
  const iconElement = <Icon size={16} icon={icon} className="icon" />
  return (
    <Button {...props}>
      {right || iconElement}
      <span className="text">{children}</span>
      {right && iconElement}
    </Button>
  )
})`
  & > .text {
    vertical-align: middle;
    @media screen and (max-width: 420px) {
      display: ${(props) => props.responsive && 'none'};
    }
  }

  & > .icon {
    margin: ${(props) => props.children ? (props.right ? '0 0 0 0.5rem' : '0 0.5rem 0 0') : 0};
    @media screen and (max-width: 420px) {
      margin: ${(props) => props.responsive && 0};
    }
  }
`

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.any
}

export default IconButton
