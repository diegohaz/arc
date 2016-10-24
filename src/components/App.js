import React, { PropTypes, Component } from 'react'
import { injectGlobal } from 'styled-components'

class App extends Component {
  static propTypes = {
    children: PropTypes.any
  }

  componentDidMount () {
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
