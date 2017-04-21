// https://github.com/diegohaz/arc/wiki/Testing-redux-modules
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import delay from 'delay'
import reducer from './reducer'
import sagas from './sagas'
import {
  resourceCreateRequest,
  resourceListReadRequest,
  resourceDetailReadRequest,
  resourceUpdateRequest,
  resourceDeleteRequest,
} from './actions'
import { getList, getDetail } from './selectors'

const sagaMiddleware = createSagaMiddleware()

const api = {
  post: (path, data) => Promise.resolve(data),
  get: () => Promise.resolve([1, 2, 3]),
  put: (path, data) => Promise.resolve(data),
  delete: () => Promise.resolve(),
}

const getStore = (initialState) => {
  const store = createStore(reducer, initialState, applyMiddleware(sagaMiddleware))
  sagaMiddleware.run(sagas, { api })
  return store
}

describe('resource', () => {
  test('resourceCreateRequest', async () => {
    const { getState, dispatch } = getStore()

    expect(getList(getState())).toEqual([])

    dispatch(resourceCreateRequest({ title: 'foo' }))
    await delay()
    expect(getList(getState())).toEqual([{ title: 'foo' }])

    dispatch(resourceCreateRequest({ title: 'bar' }))
    await delay()
    expect(getList(getState())).toEqual([{ title: 'bar' }, { title: 'foo' }])
  })

  test('resourceListReadRequest', async () => {
    const { getState, dispatch } = getStore()

    expect(getList(getState())).toEqual([])

    dispatch(resourceListReadRequest())
    await delay()
    expect(getList(getState())).toEqual([1, 2, 3])

    dispatch(resourceListReadRequest())
    await delay()
    expect(getList(getState())).toEqual([1, 2, 3])
  })

  test('resourceDetailReadRequest', async () => {
    const { getState, dispatch } = getStore()

    expect(getDetail(getState())).toBeNull()

    dispatch(resourceDetailReadRequest())
    await delay()
    expect(getDetail(getState())).toEqual([1, 2, 3])

    dispatch(resourceDetailReadRequest())
    await delay()
    expect(getDetail(getState())).toEqual([1, 2, 3])
  })

  test('resourceUpdateRequest', async () => {
    const { getState, dispatch } = getStore({ list: [1, 2, 3] })

    expect(getList(getState())).toEqual([1, 2, 3])

    dispatch(resourceUpdateRequest(1, 4))
    await delay()
    expect(getList(getState())).toEqual([4, 2, 3])

    dispatch(resourceUpdateRequest(4, { title: 'foo' }))
    await delay()
    expect(getList(getState())).toEqual([{ title: 'foo' }, 2, 3])

    dispatch(resourceUpdateRequest({ title: 'foo' }, { foo: 'bar' }))
    await delay()
    expect(getList(getState())).toEqual([{ title: 'foo', foo: 'bar' }, 2, 3])
  })

  test('resourceDeleteRequest', async () => {
    const { getState, dispatch } = getStore({ list: [1, 2, { foo: 'bar' }] })

    expect(getList(getState())).toEqual([1, 2, { foo: 'bar' }])

    dispatch(resourceDeleteRequest(1))
    await delay()
    expect(getList(getState())).toEqual([2, { foo: 'bar' }])

    dispatch(resourceDeleteRequest({ foo: 'bar' }))
    await delay()
    expect(getList(getState())).toEqual([2])
  })
})
