// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
import { take, call, fork, race, takeEvery } from 'redux-saga/effects'
import saga, * as sagas from './sagas'

test('matchesRequest', () => {
  const done = () => {}
  expect(sagas.matchesRequest({ type: 'FOO_REQUEST' })).toBe(false)
  expect(sagas.matchesRequest({ type: 'FOO_REQUEST', meta: {} })).toBe(false)
  expect(sagas.matchesRequest({ type: 'FOO_REQUEST', meta: { done } })).toBe(true)
  expect(sagas.matchesRequest({ type: 'FOO_SUCCESS' })).toBe(false)
  expect(sagas.matchesRequest({ type: 'FOO_SUCCESS', meta: { done } })).toBe(false)
  expect(sagas.matchesRequest({ type: 'REQUEST', meta: { done } })).toBe(false)
})

describe('handleDone', () => {
  const requestAction = {
    type: 'FOO_REQUEST',
    meta: {
      done: () => {},
    },
  }

  it('calls success', () => {
    const generator = sagas.handleDone(requestAction)
    const successAction = {
      type: 'FOO_SUCCESS',
      payload: {
        foo: 'bar',
        baz: 'qux',
      },
    }
    expect(generator.next().value).toEqual(race({
      success: take('FOO_SUCCESS'),
      failure: take('FOO_FAILURE'),
    }))
    expect(generator.next({ success: successAction }).value)
      .toEqual(call(requestAction.meta.done, null, successAction.payload))
    expect(generator.next().done).toBe(true)
  })

  it('calls failure', () => {
    const generator = sagas.handleDone(requestAction)
    const rejectAction = {
      type: 'FOO_FAILURE',
      payload: new Error(),
    }
    expect(generator.next().value).toEqual(race({
      success: take('FOO_SUCCESS'),
      failure: take('FOO_FAILURE'),
    }))
    expect(generator.next({ failure: rejectAction }).value)
      .toEqual(call(requestAction.meta.done, rejectAction.payload))
    expect(generator.next().done).toBe(true)
  })
})

test('watchRequestActions', () => {
  const generator = sagas.watchRequestActions()
  expect(generator.next().value).toEqual(takeEvery(sagas.matchesRequest, sagas.handleDone))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchRequestActions))
})
