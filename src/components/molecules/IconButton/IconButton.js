import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { Icon, Button } from 'components'

const iconStyles = ({ hasText, right, responsive }) => css`
  margin: ${hasText ? (right ? '0 0 0 0.5rem' : '0 0.5rem 0 0') : 0};
  @media screen and (max-width: 420px) {
    margin: ${responsive && 0};
  }
`

const textStyle = ({ responsive }) => css`
  vertical-align: middle;
  @media screen and (max-width: 420px) {
    display: ${responsive && 'none'};
  }
`

const StyledIcon = styled(Icon)`${iconStyles}`
const Text = styled.span`${textStyle}`

const IconButton = ({ icon, right, responsive, children, ...props }) => {
  const iconElement = (
    <StyledIcon
      size={16}
      icon={icon}
      hasText={!!children}
      right={right}
      responsive={responsive}
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
  children: PropTypes.any
}

export default IconButton
