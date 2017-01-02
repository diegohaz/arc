import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

import { Icon, Link } from 'components'

const iconStyles = ({ hasText, right, responsive }) => css`
  margin: ${hasText ? (right ? '0 0 0 0.25em' : '0 0.25em 0 0') : 0};
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

const IconLink = ({ height, icon, right, responsive, children, ...props, color, reverse }) => {
  const iconElement = (
    <StyledIcon
      height={height && height / 3 || 16}
      icon={icon}
      hasText={!!children}
      right={right}
      responsive={responsive}
      color={color}
      reverse={reverse}
    />
  )
  return (
    <Link {...props}>
      {right || iconElement}
      <Text responsive={responsive}>{children}</Text>
      {right && iconElement}
    </Link>
  )
}

IconLink.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  responsive: PropTypes.bool,
  right: PropTypes.bool,
  children: PropTypes.any
}

export default IconLink
