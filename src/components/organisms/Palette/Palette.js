import React, { PropTypes } from 'react'

import { ColorBox, Heading } from 'components'

const Palette = ({ title, hexes, ...props }) => {
  const capitalizedTitle = title && title.charAt(0).toUpperCase() + title.slice(1)
  return (
    <div {...props}>
      {capitalizedTitle && <Heading level={3}>{capitalizedTitle}</Heading>}
      {hexes.map((hex, i) => <ColorBox hex={hex} key={i} />)}
    </div>
  )
}

Palette.propTypes = {
  title: PropTypes.string,
  hexes: PropTypes.array.isRequired
}

export default Palette
