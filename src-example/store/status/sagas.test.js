// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
import { take, call, fork, race, takeEvery } from 'redux-saga/effects'
import saga, * as sagas from './sagas'

test('matchesRequest', () => {
  const resolve = () => {}
  const reject = () => {}
  expect(sagas.matchesRequest({ type: 'FOO_REQUEST' })).toBe(false)
  expect(sagas.matchesRequest({ type: 'FOO_REQUEST', meta: {} })).toBe(false)
  expect(sagas.matchesRequest({ type: 'FOO_REQUEST', meta: { resolve } })).toBe(true)
  expect(sagas.matchesRequest({ type: 'FOO_REQUEST', meta: { reject } })).toBe(true)
  expect(sagas.matchesRequest({ type: 'FOO_REQUEST', meta: { resolve, reject } })).toBe(true)
  expect(sagas.matchesRequest({ type: 'BAR_REQUEST', meta: { resolve } })).toBe(true)
  expect(sagas.matchesRequest({ type: 'FOO_SUCCESS' })).toBe(false)
  expect(sagas.matchesRequest({ type: 'FOO_SUCCESS', meta: { resolve } })).toBe(false)
  expect(sagas.matchesRequest({ type: 'FOO_SUCCESS', meta: { reject } })).toBe(false)
  expect(sagas.matchesRequest({ type: 'FOO_SUCCESS', meta: { resolve, reject } })).toBe(false)
  expect(sagas.matchesRequest({ type: 'REQUEST', meta: { resolve, reject } })).toBe(false)
})

describe('resolveOrReject', () => {
  const requestAction = {
    type: 'FOO_REQUEST',
    meta: {
      resolve: () => {},
      reject: () => {},
    },
  }

  it('calls success', () => {
    const generator = sagas.resolveOrReject(requestAction)
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
      .toEqual(call(requestAction.meta.resolve, successAction.payload))
    expect(generator.next().done).toBe(true)
  })

  it('ends if resolve is not a function', () => {
    const generator = sagas.resolveOrReject({ ...requestAction, meta: { resolve: 1 } })
    expect(generator.next().value).toEqual(race({
      success: take('FOO_SUCCESS'),
      failure: take('FOO_FAILURE'),
    }))
    expect(generator.next({ success: {} }).done).toBe(true)
  })

  it('calls failure', () => {
    const generator = sagas.resolveOrReject(requestAction)
    const rejectAction = {
      type: 'FOO_FAILURE',
      payload: new Error(),
    }
    expect(generator.next().value).toEqual(race({
      success: take('FOO_SUCCESS'),
      failure: take('FOO_FAILURE'),
    }))
    expect(generator.next({ failure: rejectAction }).value)
      .toEqual(call(requestAction.meta.reject, rejectAction.payload))
    expect(generator.next().done).toBe(true)
  })

  it('ends if reject is not a function', () => {
    const generator = sagas.resolveOrReject({ ...requestAction, meta: { reject: 1 } })
    expect(generator.next().value).toEqual(race({
      success: take('FOO_SUCCESS'),
      failure: take('FOO_FAILURE'),
    }))
    expect(generator.next({ failure: {} }).done).toBe(true)
  })

  it('ends if neither resolve or reject are functions', () => {
    const generator = sagas.resolveOrReject({ ...requestAction, meta: { resolve: 1, reject: 1 } })
    expect(generator.next().value).toEqual(race({
      success: take('FOO_SUCCESS'),
      failure: take('FOO_FAILURE'),
    }))
    expect(generator.next({ resolve: {} }).done).toBe(true)
  })
})

test('watchRequestActions', () => {
  const generator = sagas.watchRequestActions()
  expect(generator.next().value).toEqual(takeEvery(sagas.matchesRequest, sagas.resolveOrReject))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchRequestActions))
})
