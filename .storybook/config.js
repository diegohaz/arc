// https://github.com/diegohaz/arc/wiki/Storybook
import React from 'react'
import { configure, addDecorator } from '@kadira/storybook'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'

import theme from 'components/themes/default'

const req = require.context('components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

addDecorator(story => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>{story()}</ThemeProvider>
  </BrowserRouter>
))

configure(loadStories, module)
