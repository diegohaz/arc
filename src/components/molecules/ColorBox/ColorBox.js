import React, { PropTypes, Component } from 'react'
import styled from 'styled-components'
import copy from 'copy-to-clipboard'

import { fonts } from 'components'

class ColorBox extends Component {
  static propTypes = {
    hex: PropTypes.string.isRequired
  }

  constructor (props) {
    super(props)
    this.copyToClipboard = this.copyToClipboard.bind(this)
    this.state = {
      copied: false
    }
  }

  copyToClipboard () {
    const { hex } = this.props
    if (copy(hex)) {
      this.setState({ copied: true })
      setTimeout(() => this.setState({ copied: false }), 1000)
    }
  }

  render () {
    const { hex, ...props } = this.props
    return (
      <div {...props} onClick={this.copyToClipboard}>
        <div>{this.state.copied ? 'Copied' : hex}</div>
      </div>
    )
  }
}

export default styled(ColorBox)`
  display: inline-block;
  position: relative;
  font-family: ${fonts.primary};
  width: 6.25rem;
  height: 6.25rem;
  background-color: ${(props) => props.hex};
  cursor: pointer;

  & > div {
    position: absolute;
    color: #fff;
    background-color: rgba(0,0,0,0.3);
    width: 100%;
    line-height: 2rem;
    font-size: 1rem;
    bottom: 0;
    text-align: center;
  }
`
