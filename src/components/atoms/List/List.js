import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors, fonts } from 'components'

const List = ({ ordered, style, children, ...props }) => {
  return React.createElement(ordered ? 'ol' : 'ul', {
    ...props,
    style: [styles.base({ ordered }), style]
  }, children)
}

List.propTypes = {
  ordered: PropTypes.bool,
  style: PropTypes.object,
  children: PropTypes.any
}

const styles = {
  base: ({ ordered }) => ({
    fontFamily: fonts.primary,
    margin: '1rem 0',
    paddingLeft: '1.6rem',
    lineHeight: '1.7rem',
    color: colors.grayscale[0]
  })
}

export default Radium(List)
