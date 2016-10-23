import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducer, saga } from '.'

const configureStore = (initialState) => {
  const hasWindow = typeof window !== 'undefined'
  const sagaMiddleware = createSagaMiddleware()

  const finalCreateStore = compose(
    applyMiddleware(sagaMiddleware),
    hasWindow && window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )(createStore)

  const store = finalCreateStore(reducer, initialState)

  sagaMiddleware.run(saga)

  if (module.hot) {
    module.hot.accept('.', () => {
      const nextReducer = require('.').reducer
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

export default configureStore
