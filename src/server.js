import React from 'react'
import { renderToString, renderToStaticMarkup } from 'react-dom/server'
import { Provider } from 'react-redux'
import { createMemoryHistory, RouterContext, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import serialize from 'serialize-javascript'
import express from 'express'
import forceSSL from 'express-force-ssl'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import csrf from 'csurf'
import path from 'path'
import compression from 'compression'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import { env, ip, port, root } from 'config'
import routes from 'routes'
import configureStore from 'store/configure'
import { setCsrfToken } from 'store'
import { Html } from 'components'

const app = express()

if (env === 'production') {
  app.set('forceSSLOptions', {
    enable301Redirects: true,
    trustXFPHeader: true
  })
  app.use(forceSSL)
}

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(csrf({ cookie: true }))
app.use(compression())
app.use(express.static(path.join(root, 'dist')))

app.use((req, res, next) => {
  if (env === 'development') {
    global.webpackIsomorphicTools.refresh()
  }
  const memoryHistory = createMemoryHistory(req.url)
  const store = configureStore({}, memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  store.dispatch(setCsrfToken(req.csrfToken()))

  match({ history, routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search)
    }

    if (error || !renderProps) {
      return next(error)
    }

    const fetchData = () => new Promise((resolve, reject) => {
      const method = req.method.toLowerCase()
      const { params, location, components } = renderProps
      let promises = []

      components.forEach((component) => {
        if (component) {
          while (component && !component[method]) {
            component = component.WrappedComponent
          }
          component &&
          component[method] &&
          promises.push(component[method]({ req, res, params, location, store }))
        }
      })

      Promise.all(promises).then(resolve).catch(reject)
    })

    const render = (store) => {
      const content = renderToString(
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
      const initialState = store.getState()
      const assets = global.webpackIsomorphicTools.assets()
      const state = `window.__INITIAL_STATE__ = ${serialize(initialState)}`
      const markup = <Html {...{ styles, assets, state, content }} />
      const doctype = '<!doctype html>\n'
      const html = renderToStaticMarkup(markup)

      res.send(doctype + html)
    }

    fetchData().then(() => {
      render(configureStore(store.getState(), memoryHistory))
    }).catch((err) => {
      console.log(err)
      res.status(500).end()
    })
  })
})

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on http://${ip}:${port}`)
  }
})
