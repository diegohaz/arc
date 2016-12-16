import { takeEvery } from 'redux-saga'
import { take, call, fork, race } from 'redux-saga/effects'
import saga, * as sagas from './sagas'

test('matchesRequest', () => {
  const resolve = () => {}
  const reject = () => {}
  expect(sagas.matchesRequest({ type: 'SOMETHING_REQUEST' })).toBe(false)
  expect(sagas.matchesRequest({ type: 'SOMETHING_REQUEST', resolve })).toBe(true)
  expect(sagas.matchesRequest({ type: 'SOMETHING_REQUEST', reject })).toBe(true)
  expect(sagas.matchesRequest({ type: 'SOMETHING_REQUEST', resolve, reject })).toBe(true)
  expect(sagas.matchesRequest({ type: 'ANOTHER_THING_REQUEST', resolve })).toBe(true)
  expect(sagas.matchesRequest({ type: 'SOMETHING_SUCCESS' })).toBe(false)
  expect(sagas.matchesRequest({ type: 'SOMETHING_SUCCESS', resolve })).toBe(false)
  expect(sagas.matchesRequest({ type: 'SOMETHING_SUCCESS', reject })).toBe(false)
  expect(sagas.matchesRequest({ type: 'SOMETHING_SUCCESS', resolve, reject })).toBe(false)
  expect(sagas.matchesRequest({ type: 'REQUEST', resolve, reject })).toBe(false)
})

describe('resolveOrReject', () => {
  const action = {
    type: 'SOMETHING_REQUEST',
    resolve: () => {},
    reject: () => {}
  }

  it('calls success', () => {
    const generator = sagas.resolveOrReject(action)
    expect(generator.next().value).toEqual(race({
      success: take('SOMETHING_SUCCESS'),
      failure: take('SOMETHING_FAILURE')
    }))
    expect(generator.next({
      success: { type: 'SOMETHING_SUCCESS', foo: 'bar', baz: 1 }
    }).value).toEqual(call(action.resolve, { foo: 'bar', baz: 1 }))
    expect(generator.next().done).toBe(true)
  })

  it('ends if resolve is not a function', () => {
    const generator = sagas.resolveOrReject({ ...action, resolve: 1 })
    expect(generator.next().value).toEqual(race({
      success: take('SOMETHING_SUCCESS'),
      failure: take('SOMETHING_FAILURE')
    }))
    expect(generator.next({ success: {} }).done).toBe(true)
  })

  it('calls failure', () => {
    const generator = sagas.resolveOrReject(action)
    expect(generator.next().value).toEqual(race({
      success: take('SOMETHING_SUCCESS'),
      failure: take('SOMETHING_FAILURE')
    }))
    expect(generator.next({
      failure: { type: 'SOMETHING_FAILURE', foo: 'bar', baz: 1 }
    }).value).toEqual(call(action.reject, { foo: 'bar', baz: 1 }))
    expect(generator.next().done).toBe(true)
  })

  it('ends if reject is not a function', () => {
    const generator = sagas.resolveOrReject({ ...action, reject: 1 })
    expect(generator.next().value).toEqual(race({
      success: take('SOMETHING_SUCCESS'),
      failure: take('SOMETHING_FAILURE')
    }))
    expect(generator.next({ failure: {} }).done).toBe(true)
  })

  it('ends if neither resolve or reject are functions', () => {
    const generator = sagas.resolveOrReject({ ...action, resolve: 1, reject: 1 })
    expect(generator.next().value).toEqual(race({
      success: take('SOMETHING_SUCCESS'),
      failure: take('SOMETHING_FAILURE')
    }))
    expect(generator.next({ resolve: {} }).done).toBe(true)
  })
})

test('watchRequestActions', () => {
  const generator = sagas.watchRequestActions()
  expect(generator.next().value)
    .toEqual(call(takeEvery, sagas.matchesRequest, sagas.resolveOrReject))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchRequestActions))
})
