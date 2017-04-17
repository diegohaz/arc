// https://github.com/diegohaz/arc/wiki/Testing-redux-modules
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import delay from 'delay'
import reducer from './reducer'
import sagas from './sagas'
import { postCreateRequest, postListReadRequest } from './actions'
import { getList } from './selectors'

const sagaMiddleware = createSagaMiddleware()

const api = {
  post: (path, data) => Promise.resolve(data),
  get: () => Promise.resolve([1, 2, 3]),
}

const getStore = (initialState) => {
  const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(sagas, { api })
  return store
}

describe('post', () => {
  test('postCreateRequest', async () => {
    const { getState, dispatch } = getStore()

    expect(getList(getState())).toEqual([])

    dispatch(postCreateRequest({ title: 'foo' }))
    await delay()
    expect(getList(getState())).toEqual([{ title: 'foo' }])

    dispatch(postCreateRequest({ title: 'bar' }))
    await delay()
    expect(getList(getState())).toEqual([{ title: 'bar' }, { title: 'foo' }])
  })

  test('postListReadRequest', async () => {
    const { getState, dispatch } = getStore()

    expect(getList(getState())).toEqual([])

    dispatch(postListReadRequest())
    await delay()
    expect(getList(getState())).toEqual([1, 2, 3])

    dispatch(postListReadRequest())
    await delay()
    expect(getList(getState())).toEqual([1, 2, 3])
  })
})
