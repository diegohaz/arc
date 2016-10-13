import React, { PropTypes } from 'react'
import Radium from 'radium'
import * as router from 'react-router'

import { colors, fonts } from 'components'

const RouterLink = Radium(router.Link)

const Link = ({ href, to, style, kind, ...props }) => {
  const cx = [styles.base({ kind }), style]
  if (href) {
    return <a {...props} href={href} style={cx} />
  }
  return <RouterLink {...props} to={to} style={cx} />
}

Link.propTypes = {
  href: PropTypes.string,
  kind: PropTypes.oneOf(Object.keys(colors)),
  to: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.any
}

Link.defaultProps = {
  kind: 'primary'
}

const styles = {
  base: ({ kind }) => ({
    fontFamily: fonts.primary,
    textDecoration: 'none',
    fontWeight: 500,
    color: colors[kind][1],
    ':hover': {
      textDecoration: 'underline'
    }
  })
}

export default Radium(Link)
