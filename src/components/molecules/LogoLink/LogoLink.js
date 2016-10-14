import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { LogoImage, Link } from 'components'

const LogoLink = styled(({ width, height, ...props }) => {
  width = width || (height ? undefined : 80)
  return (
    <Link href="#" {...props}>
      <LogoImage width={width} height={height} />
    </Link>
  )
})`
  &:hover {
    text-decoration: none;
  }
`

LogoLink.propTypes = {
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default LogoLink
