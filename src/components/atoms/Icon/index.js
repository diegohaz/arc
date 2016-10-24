import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

const styles = ({ size, color }) => css`
  display: inline-block;
  width: ${size ? size / 16 + 'rem' : '1em'};
  height: ${size ? size / 16 + 'rem' : '1em'};
  box-sizing: border-box;
  margin: ${size ? size / 160 + 'rem' : '0.1em'};
  color: ${color};

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`

const Wrapper = styled.span`${styles}`

const Icon = ({ icon, ...props }) => {
  const svg = require(`raw!./icons/${icon}.svg`)
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: svg }} />
}

Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string
}

export default Icon
