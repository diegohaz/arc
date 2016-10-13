import React, { PropTypes } from 'react'
import Radium, { Style } from 'radium'

const icons = {
  github: require('./icons/github.svg'),
  code: require('./icons/code.svg'),
  'arrow-top': require('./icons/arrow-top.svg')
}

const Icon = ({ style, icon, size, ...props }) => {
  return (
    <div {...props} style={[styles.base({ icon, size }), style]}>
      <Style scopeSelector="svg" rules={styles.svg} />
      <span dangerouslySetInnerHTML={{ __html: icons[icon] }} />
    </div>
  )
}

Icon.propTypes = {
  style: PropTypes.object,
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  size: PropTypes.number
}

Icon.defaultProps = {
  size: 20
}

const styles = {
  base: ({ src, size }) => ({
    display: 'inline-block',
    width: `${size / 16}rem`,
    height: `${size / 16}rem`,
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    alignSelf: 'center',
    margin: `${size / 160}rem`
  }),
  svg: {
    width: '100%',
    height: '100%',
    fill: 'currentcolor',
    stroke: 'currentcolor'
  }
}

export default Radium(Icon)
