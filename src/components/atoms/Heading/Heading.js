import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors, fonts } from 'components'

const Heading = ({ level, style, children, ...props }) => {
  return React.createElement(`h${level}`, {
    ...props,
    style: [styles.base({ level }), style]
  }, children)
}

Heading.propTypes = {
  level: PropTypes.number,
  style: PropTypes.object,
  children: PropTypes.any
}

Heading.defaultProps = {
  level: 1
}

const styles = {
  base: ({ level }) => ({
    fontFamily: fonts.primary,
    fontWeight: 500,
    fontSize: `${0.75 + 1 * (1 / level)}rem`,
    margin: `${1 + 0.5 * (1 / level)}rem 0 ${0.5 + 0.5 * (1 / level)}rem`,
    color: colors.grayscale[0]
  })
}

export default Radium(Heading)
