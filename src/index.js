import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter, Match } from 'react-router'
import { HomePage } from 'components'

const root = document.getElementById('app')

const renderApp = () => (
  <AppContainer>
    <BrowserRouter>
      <Match pattern="*" component={HomePage} />
    </BrowserRouter>
  </AppContainer>
)

render(renderApp(), root)

if (module.hot) {
  module.hot.accept('components', () => {
    require('components')
    render(renderApp(), root)
  })
}
