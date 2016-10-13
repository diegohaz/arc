import React, { PropTypes } from 'react'
import Radium from 'radium'

import { colors, Paragraph, Link } from 'components'

const Palette = ({ style, ...props }) => {
  return (
    <footer {...props} style={[styles.base, style]}>
      <Paragraph style={styles.credits}>
        Made with ❤️ by <Link href="https://github.com/diegohaz">Haz</Link>
      </Paragraph>
    </footer>
  )
}

Palette.propTypes = {
  style: PropTypes.object
}

const styles = {
  base: {
    backgroundColor: [ ...colors.grayscale ].reverse()[1],
    padding: '2rem'
  },
  credits: {
    textAlign: 'center',
    margin: 0
  }
}

export default Radium(Palette)
