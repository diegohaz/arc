import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

import { HomePage, SamplePage, NotFoundPage } from 'components'

// https://github.com/diegohaz/arc/wiki/Styling
import theme from './themes/default'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/sample-page" component={SamplePage} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
