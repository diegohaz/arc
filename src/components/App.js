import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { HomePage } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route path="/" component={HomePage} exact />
        </Switch>
      </ThemeProvider>
    </div>
  )
}

export default App
