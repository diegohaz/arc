import configureStore from 'redux-mock-store'
import statusMiddleware from './middleware'

const mockStore = configureStore([statusMiddleware])

it('dispatches the exactly same action when it has no meta', () => {
  const store = mockStore({})
  const action = { type: 'FOO', payload: 1 }
  expect(store.dispatch(action)).toEqual(action)
  expect(store.getActions()).toEqual([action])
})

it('dispatches the exactly same action when it has no meta.done', () => {
  const store = mockStore({})
  const action = { type: 'FOO', meta: {} }
  expect(store.dispatch(action)).toEqual(action)
  expect(store.getActions()).toEqual([action])
})

it('dispatches the exactly same action when it has defined meta.done', () => {
  const store = mockStore({})
  const action = { type: 'FOO', meta: { done: () => {} } }
  expect(store.dispatch(action)).toEqual(action)
  expect(store.getActions()).toEqual([action])
})

it('dispatches async action and returns a promise from dispatch', async () => {
  const store = mockStore({})
  const action = { type: 'FOO', meta: { done: undefined } }
  expect(store.dispatch(action)).toBeInstanceOf(Promise)
})
