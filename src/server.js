/* eslint-disable no-console */
// Necessary for SSR
import 'isomorphic-fetch'

import React from 'react'
import serialize from 'serialize-javascript'
import styleSheet from 'styled-components/lib/models/StyleSheet'
import { renderToStaticMarkup, renderToString } from 'react-dom/server'
import { ApolloProvider, getDataFromTree } from 'react-apollo'
import { createMemoryHistory, match, RouterContext } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router } from 'express'
import express from 'services/express'
import routes from 'routes'
import configureStore from 'store/configure'
import { env, port, ip, basename } from 'config'
import Html from 'components/Html'
import { getClient } from './store/apollo'
import { handleError } from './services/logger/index'

const router = new Router()

router.use((req, res, next) => {
  if (env === 'development') {
    global.webpackIsomorphicTools.refresh()
  }

  const location = req.url.replace(basename, '')
  const memoryHistory = createMemoryHistory({ basename })
  const store = configureStore({}, memoryHistory)
  const history = syncHistoryWithStore(memoryHistory, store)

  match({ history, routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation) {
      res.redirect(redirectLocation.pathname + redirectLocation.search)
    }

    if (error || !renderProps) {
      return next(error)
    }

    const fetchData = () => new Promise((resolve, reject) => {
      const method = req.method.toLowerCase()
      const { params, location, components } = renderProps
      const promises = []

      components.forEach((component) => {
        if (component) {
          while (component && !component[method]) {
            // eslint-disable-next-line no-param-reassign
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
      const apolloClient = getClient()

      const app = (
        <ApolloProvider store={store} client={apolloClient}>
          <RouterContext {...renderProps} />
        </ApolloProvider>
      )

      getDataFromTree(app)
        .then(() => {

          const content = renderToString(app)

          const styles = styleSheet.rules().map(rule => rule.cssText).join('\n')
          const initialState = store.getState()
          const assets = global.webpackIsomorphicTools.assets()
          const state = `window.__INITIAL_STATE__ = ${serialize(initialState)}`
          const markup = (<Html
            {...{
              styles,
              assets,
              state,
              content
            }}
          />)
          const doctype = '<!doctype html>\n'
          const html = renderToStaticMarkup(markup)

          res.send(doctype + html)
        })
        .catch((err) => {
          handleError(err)
        })
    }

    return fetchData().then(() => {
      render(configureStore(store.getState(), memoryHistory))
    }).catch((err) => {
      handleError(err)
      res.status(500).end()
    })
  })
})

const app = express(router)

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`Listening on http://${ip}:${port}`)
  }
})

export default app
