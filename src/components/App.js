import React, { PropTypes, Component } from 'react'
import { injectGlobal, ThemeProvider } from 'styled-components'

import theme from './themes/default'

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
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    )
  }
}

export default App
