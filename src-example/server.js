/* eslint-disable no-console */
import 'babel-polyfill'
import path from 'path'
import express from 'express'
import React from 'react'
import serialize from 'serialize-javascript'
import { ServerStyleSheet } from 'styled-components'
import { renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-router-server'

import { port, host, basename } from 'config'
import configureStore from 'store/configure'
import api from 'services/api'
import App from 'components/App'
import Html from 'components/Html'
import Error from 'components/Error'

const renderApp = ({
  store, context, location, sheet,
}) => {
  const app = sheet.collectStyles((
    <Provider store={store}>
      <StaticRouter basename={basename} context={context} location={location}>
        <App />
      </StaticRouter>
    </Provider>
  ))
  return renderToString(app)
}

const renderHtml = ({
  serverState, initialState, content, sheet,
}) => {
  const styles = sheet.getStyleElement()
  const { assets } = global
  const state = `
    window.__SERVER_STATE__ = ${serialize(serverState)};
    window.__INITIAL_STATE__ = ${serialize(initialState)};
  `
  const props = {
    styles, assets, state, content,
  }
  const html = <Html {...props} />
  return `<!doctype html>\n${renderToStaticMarkup(html)}`
}

const app = express()

app.use(basename, express.static(path.resolve(process.cwd(), 'dist/public')))

app.use((req, res, next) => {
  const location = req.url
  const store = configureStore({}, { api: api.create() })
  const context = {}
  const sheet = new ServerStyleSheet()

  renderApp({
    store, context, location, sheet,
  }).then(({ state: serverState, html: content }) => {
    if (context.status) {
      res.status(context.status)
    }
    if (context.url) {
      res.redirect(context.url)
    } else {
      const initialState = store.getState()
      res.send(renderHtml({
        serverState, initialState, content, sheet,
      }))
    }
  }).catch(next)
})

app.use((err, req, res, next) => {
  const sheet = new ServerStyleSheet()
  const content = renderToStaticMarkup(sheet.collectStyles(<Error />))
  res.status(500).send(renderHtml({ content, sheet }))
  console.error(err)
  next(err)
})

app.listen(port, (error) => {
  const boldBlue = text => `\u001b[1m\u001b[34m${text}\u001b[39m\u001b[22m`
  if (error) {
    console.error(error)
  } else {
    console.info(`Server is running at ${boldBlue(`http://${host}:${port}${basename}/`)}`)
  }
})
