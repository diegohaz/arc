import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter } from 'react-router'

import { App } from 'components'

const root = document.getElementById('app')

const renderApp = () => (
  <AppContainer>
    <BrowserRouter>
      <App />
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
