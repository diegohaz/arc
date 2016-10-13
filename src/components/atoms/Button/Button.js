import React, { PropTypes } from 'react'
import Radium from 'radium'
import * as router from 'react-router'

import { colors, fonts } from 'components'

const Link = Radium(router.Link)

const Button = ({ kind, disabled, type, ...props, style, to, href }) => {
  const cx = [styles.base({ disabled, kind }), style]
  if (href || to) {
    return <Link {...props} style={cx} />
  }
  return <button {...props} type={type} disabled={disabled} style={cx} />
}

Button.propTypes = {
  disabled: PropTypes.bool,
  kind: PropTypes.oneOf(Object.keys(colors)).isRequired,
  style: PropTypes.object,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string
}

Button.defaultProps = {
  kind: 'primary',
  type: 'button'
}

const styles = {
  base: ({ disabled, kind }) => ({
    display: 'inline-flex',
    fontFamily: fonts.primary,
    alignItems: 'center',
    height: '2.7rem',
    justifyContent: 'center',
    textDecoration: 'none',
    cursor: disabled ? 'default' : 'pointer',
    appearance: 'none',
    transition: 'background-color 250ms ease-out, color 250ms ease-out',
    border: '1px solid transparent',
    fontSize: '1rem',
    padding: '0 1em',
    backgroundColor: disabled ? colors[kind][2] : colors[kind][1],
    borderRadius: '0.13rem',
    boxSizing: 'border-box',
    color: '#fff',
    ...disabled && {
      pointerEvents: 'none'
    } || {
      ':hover': { backgroundColor: colors[kind][0] },
      ':focus': { backgroundColor: colors[kind][0], outline: 'none' },
      ':active': { backgroundColor: colors[kind][0] }
    }
  })
}

export default Radium(Button)
