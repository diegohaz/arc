import { createStore, applyMiddleware, compose } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'

import entitiesMiddleware from './entities/middleware'
import reducer from './reducer'
import sagas from './sagas'
import { getClient } from './apollo'

const configureStore = (initialState, history) => {
  const hasWindow = typeof window !== 'undefined'
  const sagaMiddleware = createSagaMiddleware()

  const apolloClient = getClient()

  const middlewares = [
    entitiesMiddleware,
    sagaMiddleware,
    routerMiddleware(history),
    apolloClient.middleware(),
    ReduxThunk.withExtraArgument(apolloClient)
  ]

  const finalCreateStore = compose(
    applyMiddleware(...middlewares),
    hasWindow && window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore)

  const store = finalCreateStore(reducer, initialState)
  let sagaTask = sagaMiddleware.run(sagas)

  if (module.hot) {
    module.hot.accept('./reducer', () => {
      const nextReducer = require('./reducer').default
      store.replaceReducer(nextReducer)
    })
    module.hot.accept('./sagas', () => {
      const nextSagas = require('./sagas').default
      sagaTask.cancel()
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(nextSagas)
      })
    })
  }

  return store
}

export default configureStore
