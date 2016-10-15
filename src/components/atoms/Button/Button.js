import React, { PropTypes } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router'

import { colors, fonts } from 'components/globals'

const Button = styled(({ kind, disabled, type, ...props, to, href }) => {
  if (href || to) {
    return <Link {...props} />
  }
  return <button {...props} type={type} disabled={disabled} />
})`
  display: inline-flex;
  font-family: ${fonts.primary};
  align-items: center;
  height: 2.7rem;
  justify-content: center;
  text-decoration: none;
  cursor: ${(props) => props.disabled ? 'default' : 'pointer'};
  appearance: none;
  transition: background-color 250ms ease-out, color 250ms ease-out;
  border: 1px solid transparent;
  font-size: 1rem;
  padding: 0 1em;
  background-color: ${(props) => props.disabled ? colors[props.kind][2] : colors[props.kind][1]};
  border-radius: 0.13rem;
  box-sizing: border-box;
  color: #fff;
  pointer-events: ${(props) => props.disabled && 'none'};

  &:hover, &:focus, &:active {
    background-color: ${(props) => colors[props.kind][0]};
  }

  &:focus {
    outline: none
  }
`

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
