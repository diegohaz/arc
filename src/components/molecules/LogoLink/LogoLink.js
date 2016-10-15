import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { LogoImage, Link } from 'components'

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`

const LogoLink = ({ width, height, ...props }) => {
  width = width || (height ? undefined : 80)
  return (
    <StyledLink href="#" {...props}>
      <LogoImage width={width} height={height} />
    </StyledLink>
  )
}

LogoLink.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default LogoLink
