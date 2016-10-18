import React, { PropTypes } from 'react'
import styled, { css } from 'styled-components'
import { Link } from 'react-router'

import { colors, fonts } from 'components/globals'

const styles = ({ disabled, kind }) => css`
  display: inline-flex;
  font-family: ${fonts.primary};
  align-items: center;
  height: 2.7rem;
  justify-content: center;
  text-decoration: none;
  cursor: ${disabled ? 'default' : 'pointer'};
  appearance: none;
  transition: background-color 250ms ease-out, color 250ms ease-out;
  border: 1px solid transparent;
  font-size: 1rem;
  padding: 0 1em;
  background-color: ${disabled ? colors[kind][2] : colors[kind][1]};
  border-radius: 0.13rem;
  box-sizing: border-box;
  color: #fff;
  pointer-events: ${disabled && 'none'};

  &:hover, &:focus, &:active {
    background-color: ${colors[kind][0]};
  }

  &:focus {
    outline: none
  }
`

const StyledLink = styled(Link)`${styles}`
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
  kind: PropTypes.oneOf(Object.keys(colors)).isRequired,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string
}

Button.defaultProps = {
  kind: 'primary',
  type: 'button'
}

export default Button
