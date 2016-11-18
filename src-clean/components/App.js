import React, { Component, PropTypes } from 'react'
import { injectGlobal } from 'styled-components'

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  componentWillMount () {
    injectGlobal`
      body {
        margin: 0;
      }
    `
  }

  render () {
    const { children } = this.props
    return (
      <div>{children}</div>
    )
  }
}

export default App
