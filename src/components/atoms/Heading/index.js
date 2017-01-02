import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'

export const fontFamily = ({ theme }) => theme.fonts.primary
export const fontSize = ({ level }) => `${0.75 + 1 * (1 / level)}rem`

export const color = ({ theme, reverse, color }) =>
  theme[reverse ? 'reverseColors' : 'colors'][color][color === 'grayscale' ? 0 : 1]

const styles = css`
  font-family: ${fontFamily};
  font-weight: 500;
  font-size: ${fontSize};
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
  color: ${color};
`

const Heading = styled(({ level, children, reverse, theme, ...props }) => {
  return React.createElement(`h${level}`, props, children)
})`${styles}`

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  color: PropTypes.string,
  reverse: PropTypes.bool
}

Heading.defaultProps = {
  level: 1,
  color: 'grayscale',
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 0: '#222' }
    },
    reverseColors: {
      grayscale: { 0: '#fff' }
    }
  }
}

export default Heading
