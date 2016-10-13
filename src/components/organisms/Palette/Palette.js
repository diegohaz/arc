import React, { PropTypes } from 'react'
import Radium from 'radium'

import { ColorBox, Heading } from 'components'

const Palette = ({ style, title, hexes, ...props }) => {
  const capitalizedTitle = title && title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <div {...props} style={[styles.base, style]}>
      {capitalizedTitle && <Heading level={3}>{capitalizedTitle}</Heading>}
      {hexes.map((hex, i) => <ColorBox hex={hex} key={i} />)}
    </div>
  )
}

Palette.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  hexes: PropTypes.array.isRequired
}

const styles = {
  base: {}
}

export default Radium(Palette)
