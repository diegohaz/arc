// https://github.com/diegohaz/arc/wiki/Example-redux-modules#async
import configureStore from 'redux-mock-store'
import asyncMiddleware from './middleware'

const mockStore = configureStore([asyncMiddleware])

const createAction = meta => ({
  type: 'FOO',
  ...meta ? { meta } : {},
})

it('dispatches the exactly same action when it has no meta', () => {
  const store = mockStore({})
  const action = createAction()
  expect(store.dispatch(action)).toEqual(action)
  expect(store.getActions()).toEqual([action])
})

it('dispatches the exactly same action when it has no meta.async', () => {
  const store = mockStore({})
  const action = createAction({})
  expect(store.dispatch(action)).toEqual(action)
  expect(store.getActions()).toEqual([action])
})

it('dispatches the exactly same action when it has meta.async.key', () => {
  const store = mockStore({})
  const action = createAction({ async: { key: '123' } })
  expect(store.dispatch(action)).toEqual(action)
  expect(store.getActions()).toEqual([action])
})

it('dispatches async action and returns promise when it has meta.async', () => {
  const store = mockStore({})
  const action = createAction({ async: true })
  expect(store.dispatch(action)).toBeInstanceOf(Promise)
  expect(store.getActions()).toEqual([
    createAction({
      async: {
        done: expect.any(Function),
        key: expect.any(String),
      },
    }),
  ])
})

it('dispatches async action when it has meta.async.done', () => {
  const store = mockStore({})
  const done = () => {}
  const action = createAction({ async: { done } })
  const expected = createAction({ async: { done, key: expect.any(String) } })
  expect(store.dispatch(action)).toEqual(expected)
  expect(store.getActions()).toEqual([expected])
})
