import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Link from 'react-router-dom/Link'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'

const fontSize = ({ height }) => `${height / 40}rem`

const backgroundColor = ({ transparent, disabled }) =>
  transparent ? 'transparent' : palette(disabled ? 2 : 1)

const foregroundColor = ({ transparent, disabled }) =>
  transparent ? palette(disabled ? 2 : 1) : palette('grayscale', 0, true)

const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette(0)
const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && palette(0)

const styles = css`
  display: inline-flex;
  font-family: ${font('primary')};
  align-items: center;
  white-space: nowrap;
  font-size: ${fontSize};
  border: 0.0625em solid ${ifProp('transparent', 'currentcolor', 'transparent')};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${ifProp('disabled', 'default', 'pointer')};
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: ${ifProp('disabled', 'none', 'auto')};
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;
  background-color: ${backgroundColor};
  color: ${foregroundColor};

  &:hover, &:focus, &:active {
    background-color: ${hoverBackgroundColor};
    color: ${hoverForegroundColor};
  }

  &:focus {
    outline: none
  }
`

const StyledLink = styled(({ disabled, transparent, reverse, palette, height, theme, ...props }) =>
  <Link {...props} />
)`${styles}`
const Anchor = styled.a`${styles}`
const StyledButton = styled.button`${styles}`

const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />
  } else if (props.href) {
    return <Anchor {...props} />
  }
  return <StyledButton {...props} type={type} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
}

export default Button
