import React, { PropTypes } from 'react'
import Radium from 'radium'

import { fonts, colors } from 'components'

const Blockquote = ({ style, cite, children, ...props }) => {
  return (
    <blockquote {...props} style={[styles.base, style]}>
      <div>{children}</div>
      {cite && <cite style={styles.cite}>{cite}</cite>}
    </blockquote>
  )
}

Blockquote.propTypes = {
  style: PropTypes.object,
  cite: PropTypes.string,
  children: PropTypes.any
}

const styles = {
  base: {
    position: 'relative',
    fontFamily: fonts.quote,
    fontStyle: 'italic',
    fontSize: '1.2rem',
    lineHeight: '2rem',
    boxSizing: 'border-box',
    color: colors.grayscale[1],
    borderLeft: `5px solid ${colors.grayscale[4]}`,
    margin: '1rem 0',
    padding: '0.5rem 0 0.5rem 1.5rem'
  },
  cite: {
    display: 'block',
    fontFamily: fonts.primary,
    fontWeight: 300,
    fontStyle: 'normal',
    marginTop: '0.4rem'
  }
}

export default Radium(Blockquote)
