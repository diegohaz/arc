import React, { PropTypes, Component } from 'react'
import Radium from 'radium'
import copy from 'copy-to-clipboard'

import { fonts } from 'components'

class ColorBox extends Component {
  static propTypes = {
    style: PropTypes.object,
    hex: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.copyToClipboard = this.copyToClipboard.bind(this)
  }

  copyToClipboard () {
    const { hex } = this.props
    if (copy(hex)) {
      this.setState({ copied: true })
      setTimeout(() => this.setState({ copied: false }), 1000)
    }
  }

  render () {
    const { style, hex, ...props } = this.props
    return (
      <div {...props} style={[styles.base({ hex }), style]} onClick={this.copyToClipboard}>
        <div style={styles.hex}>{this.state.copied ? 'Copied' : hex}</div>
      </div>
    )
  }
}

const styles = {
  base: ({ hex }) => ({
    display: 'inline-block',
    position: 'relative',
    fontFamily: fonts.primary,
    width: '6.25rem',
    height: '6.25rem',
    backgroundColor: hex,
    cursor: 'pointer'
  }),
  hex: {
    position: 'absolute',
    color: '#fff',
    backgroundColor: 'rgba(0,0,0,0.3)',
    width: '100%',
    lineHeight: '2rem',
    fontSize: '1rem',
    bottom: 0,
    textAlign: 'center'
  }
}

export default Radium(ColorBox)
