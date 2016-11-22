import React, { Component, PropTypes } from 'react'
import { injectGlobal } from 'styled-components'

injectGlobal`
  body {
    margin: 0;
  }
`

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  render () {
    const { children } = this.props
    return (
      <div>{children}</div>
    )
  }
}

export default App
