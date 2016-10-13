import React, { PropTypes } from 'react'
import Radium from 'radium'

import { fonts, colors } from 'components'

const Table = ({ style, caption, head, foot, children, ...props }) => {
  return (
    <table {...props} style={[styles.base, style]}>
      {caption && <caption style={styles.caption}>{caption}</caption>}
      {head && <thead>{head}</thead>}
      {foot && <tfoot>{foot}</tfoot>}
      <tbody>{children}</tbody>
    </table>
  )
}

Table.propTypes = {
  style: PropTypes.object,
  caption: PropTypes.string,
  head: PropTypes.any,
  foot: PropTypes.any,
  children: PropTypes.any
}

const styles = {
  base: {
    fontFamily: fonts.primary,
    borderCollapse: 'collapse',
    width: '100%',
    border: `1px solid ${[ ...colors.grayscale ].reverse()[1]}`,
    color: colors.grayscale[0]
  },
  caption: {
    fontWeight: 500,
    lineHeight: '2rem',
    fontSize: '0.875rem',
    color: colors.grayscale[1],
    textTransform: 'uppercase'
  }
}

export default Radium(Table)
