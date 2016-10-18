import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

const icons = {
  github: require('./icons/github.svg'),
  code: require('./icons/code.svg'),
  'arrow-top': require('./icons/arrow-top.svg')
}

const styles = ({ size }) => css`
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
`

const Wrapper = styled.span`${styles}`

const Icon = ({ icon, ...props }) => {
  return <Wrapper {...props} dangerouslySetInnerHTML={{ __html: icons[icon] }} />
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.number
}

Icon.defaultProps = {
  size: 20
}

export default Icon
