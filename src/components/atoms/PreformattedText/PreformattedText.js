import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors, fonts } from 'components'

const PreformattedText = ({ style, inline, children, ...props }) => {
  return (
    <pre {...props} style={[styles.base({ inline }), style]}>{children}</pre>
  )
}

PreformattedText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.string,
  inline: PropTypes.bool
}

const styles = {
  base: ({ inline }) => ({
    fontFamily: fonts.pre,
    display: inline ? 'inline' : 'block',
    backgroundColor: [ ...colors.grayscale ].reverse()[1],
    padding: inline ? 0 : '1rem'
  })
}

export default Radium(PreformattedText)
