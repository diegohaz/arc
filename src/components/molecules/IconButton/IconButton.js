import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { Icon, Button } from 'components'

const iconStyles = ({ hasText, right, responsive }) => css`
  margin: ${hasText ? (right ? '0 0 0 0.5em' : '0 0.5em 0 0') : 0};
  @media screen and (max-width: 420px) {
    margin: ${responsive && 0};
  }
`

const textStyle = ({ responsive }) => css`
  @media screen and (max-width: 420px) {
    display: ${responsive && 'none'};
  }
`

const StyledIcon = styled(Icon)`${iconStyles}`
const Text = styled.span`${textStyle}`

const IconButton = ({ color, icon, right, responsive, children, ...props, size }) => {
  const iconElement = (
    <StyledIcon
      size={size && size / 2.5}
      icon={icon}
      hasText={!!children}
      right={right}
      responsive={responsive}
      color={color}
    />
  )
  return (
    <Button {...props}>
      {right || iconElement}
      <Text responsive={responsive}>{children}</Text>
      {right && iconElement}
    </Button>
  )
}

IconButton.propTypes = {
  icon: PropTypes.string.isRequired,
  responsive: PropTypes.bool,
  right: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  children: PropTypes.any
}

export default IconButton
