import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'

export const colorKind = ({ theme, reverse }) => theme[reverse ? 'reverseColors' : 'colors']

export const fontFamily = ({ theme }) => theme.fonts.primary
export const fontSize = ({ height }) => `${height / 40}rem`
export const borderColor = ({ transparent }) => transparent ? 'currentcolor' : 'transparent'
export const cursor = ({ disabled }) => disabled ? 'default' : 'pointer'
export const pointerEvents = ({ disabled }) => disabled ? 'none' : 'auto'

export const backgroundColor = ({ transparent, disabled, color, ...props }) =>
  transparent ? 'transparent' : colorKind(props)[color][disabled ? 2 : 1]

export const color = ({ transparent, disabled, color, ...props, reverse }) =>
  transparent
  ? colorKind(props)[color][disabled ? 2 : 1]
  : colorKind({ ...props, reverse: !reverse }).grayscale[0]

export const hoverBackgroundColor = ({ disabled, transparent, color, ...props }) =>
  !disabled && !transparent && colorKind(props)[color][0]

export const hoverColor = ({ disabled, transparent, color, ...props }) =>
  !disabled && transparent && colorKind(props)[color][0]

const styles = css`
  display: inline-flex;
  font-family: ${fontFamily};
  align-items: center;
  white-space: nowrap;
  font-size: ${fontSize};
  border: 0.0625em solid ${borderColor};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${cursor};
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: ${pointerEvents};
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: ${backgroundColor};
  color: ${color};

  &:hover, &:focus, &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverColor};
  }

  &:focus {
    outline: none
  }
`

const StyledLink = styled(({ disabled, transparent, reverse, color, height, theme, ...props }) =>
  <Link {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props, to, href }) => {
  if (to) {
    return <StyledLink {...props} />
  } else if (href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string
}

Button.defaultProps = {
  color: 'primary',
  type: 'button',
  height: 40,
  theme: {
    fonts: {
      primary: 'sans-serif'
    },
    colors: {
      grayscale: { 0: '#222', 1: '#555', 2: '#888' },
      primary: { 0: '#1976d2', 1: '#2196f3', 2: '#71bcf7' }
    },
    reverseColors: {
      grayscale: { 0: '#fff', 1: '#bbb', 2: '#888' },
      primary: { 0: '#c2e2fb', 1: '#71bcf7', 2: '#2196f3' }
    }
  }
}

export default Button
