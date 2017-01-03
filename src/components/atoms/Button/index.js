import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { get, getColor } from 'arc-theme'

export const fontFamily = ({ theme }) => get('fonts.primary', theme)
export const fontSize = ({ height }) => `${height / 40}rem`
export const borderColor = ({ transparent }) => transparent ? 'currentcolor' : 'transparent'
export const cursor = ({ disabled }) => disabled ? 'default' : 'pointer'
export const pointerEvents = ({ disabled }) => disabled ? 'none' : 'auto'

export const backgroundColor = ({ transparent, disabled, color, theme, reverse }) =>
  transparent ? 'transparent' : getColor([color, disabled ? 2 : 1], reverse, theme)

export const color = ({ transparent, disabled, color, theme, reverse }) =>
  transparent
  ? getColor([color, disabled ? 2 : 1], reverse, theme)
  : getColor('grayscale[0]', !reverse, theme)

export const hoverBackgroundColor = ({ disabled, transparent, color, theme, reverse }) =>
  !disabled && !transparent && getColor([color, 0], reverse, theme)

export const hoverColor = ({ disabled, transparent, color, theme, reverse }) =>
  !disabled && transparent && getColor([color, 0], reverse, theme)

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
  height: 40
}

export default Button
