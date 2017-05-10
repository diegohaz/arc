// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#async
import { call, fork, takeEvery } from 'redux-saga/effects'
import saga, * as sagas from './sagas'

test('matchRequest', () => {
  const done = () => {}
  const matches = sagas.matchRequest
  expect(matches({ type: 'FOO_REQUEST' })).toBe(false)
  expect(matches({ type: 'FOO_REQUEST', meta: {} })).toBe(false)
  expect(matches({ type: 'FOO_REQUEST', meta: { async: { done } } })).toBe(true)
  expect(matches({ type: 'FOO_SUCCESS' })).toBe(false)
  expect(matches({ type: 'FOO_SUCCESS', meta: { async: { done } } })).toBe(false)
  expect(matches({ type: 'REQUEST', meta: { async: { done } } })).toBe(false)
})

test('matchResponse', () => {
  const matches = sagas.matchResponse
  const action = (type, key) => ({ type, meta: { async: { key } } })
  expect(matches('FOO', 123)(action('FOO', 123))).toBe(true)
  expect(matches('FOO')(action('FOO', 123))).toBe(false)
  expect(matches('FOO')(action('FOO'))).toBe(true)
  expect(matches('FOO', 123)(action('FOO'))).toBe(true)
  expect(matches('FOO', 123)(action('BAR'))).toBe(false)
  expect(matches('FOO', 123)(action('BAR', 123))).toBe(false)
  expect(matches('FOO')(action('BAR'))).toBe(false)
})

describe('handleResponse', () => {
  const requestAction = {
    type: 'FOO_REQUEST',
    meta: {
      async: {
        key: '123',
        done: () => {},
      },
    },
  }

  it('calls success', () => {
    const generator = sagas.handleResponse(requestAction)
    const successAction = {
      type: 'FOO_SUCCESS',
      payload: {
        foo: 'bar',
        baz: 'qux',
      },
    }
    generator.next()
    expect(generator.next({ success: successAction }).value)
      .toEqual(call(requestAction.meta.async.done, null, successAction.payload))
    expect(generator.next().done).toBe(true)
  })

  it('calls failure', () => {
    const generator = sagas.handleResponse(requestAction)
    const rejectAction = {
      type: 'FOO_FAILURE',
      payload: new Error(),
    }
    generator.next()
    expect(generator.next({ failure: rejectAction }).value)
      .toEqual(call(requestAction.meta.async.done, rejectAction.payload))
    expect(generator.next().done).toBe(true)
  })
})

test('watchRequestActions', () => {
  const generator = sagas.watchRequestActions()
  expect(generator.next().value).toEqual(takeEvery(sagas.matchRequest, sagas.handleResponse))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchRequestActions))
})
