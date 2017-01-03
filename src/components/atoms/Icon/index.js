import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { color, ifProps } from 'arc-theme'

export const fontSize = ({ height }) => height ? `${height / 16}rem` : '1.25em'

const Wrapper = styled.span`
  display: inline-block;
  font-size: ${fontSize};
  color: ${ifProps('color', color({ grayscale: 0 }, 1), 'currentcolor')};
  width: 1em;
  height: 1em;
  margin: 0.1em;
  box-sizing: border-box;

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`

const Icon = ({ icon, ...props }) => {
  const svg = require(`raw!./icons/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  height: PropTypes.number,
  color: PropTypes.string,
  reverse: PropTypes.bool
}

export default Icon
