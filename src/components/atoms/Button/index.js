import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'
import { font, color, reverseColor, ifProps } from 'arc-theme'

const fontSize = ({ height }) => `${height / 40}rem`

const backgroundColor = ({ transparent, disabled }) =>
  transparent ? 'transparent' : color(disabled ? 2 : 1)

const foregroundColor = ({ transparent, disabled }) =>
  transparent ? color(disabled ? 2 : 1) : reverseColor('grayscale', 0)

const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && color(0)
const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && color(0)

const styles = css`
  display: inline-flex;
  font-family: ${font('primary')};
  align-items: center;
  white-space: nowrap;
  font-size: ${fontSize};
  border: 0.0625em solid ${ifProps('transparent', 'currentcolor', 'transparent')};
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: ${ifProps('disabled', 'default', 'pointer')};
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;
  pointer-events: ${ifProps('disabled', 'none', 'auto')};
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
