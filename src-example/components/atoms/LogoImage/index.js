import React from 'react'
import styled from 'styled-components'
import { palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

export const height = ({ height }) => height

const Wrapper = styled.span`
  color: ${ifProp('palette', palette({ grayscale: 0 }, 1), 'currentcolor')};
  height: ${height}px;
`

const LogoImage = (props) => {
  const logo = 'logo'
  const svg = require(`!raw-loader!./${logo}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg.default }} />
}

export default LogoImage
