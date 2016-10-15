import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

const icons = {
  github: require('./icons/github.svg'),
  code: require('./icons/code.svg'),
  'arrow-top': require('./icons/arrow-top.svg')
}

const Icon = styled(({ icon, ...props }) => {
  return <span {...props} dangerouslySetInnerHTML={{ __html: icons[icon] }} />
})`
${({ size }) => css`
  display: inline-block;
  width: ${size / 16}rem;
  height: ${size / 16}rem;
  box-sizing: border-box;
  vertical-align: middle;
  align-self: center;
  margin: ${size / 160}rem;

  & > svg {
    width: 100%;
    height: 100%;
    fill: currentcolor;
    stroke: currentcolor;
  }
`}`

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.number
}

Icon.defaultProps = {
  size: 20
}

export default Icon
