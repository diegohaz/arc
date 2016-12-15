import { take, fork } from 'redux-saga/effects'
import saga, * as sagas from './sagas'

const resolve = jest.fn()
const reject = jest.fn()

test('watchResolveReject', () => {
  const generator = sagas.watchResolveReject()

  const requestAction = { type: 'SOMETHING_REQUEST', resolve, reject }
  expect(generator.next().value).toEqual(take('*'))
  expect(generator.next(requestAction).value).toEqual({ prefix: 'SOMETHING', suffix: 'REQUEST' })
  expect(generator.next().value).toEqual({
    resolvers: { SOMETHING: resolve },
    rejecters: { SOMETHING: reject }
  })
  expect(resolve).not.toBeCalled()
  expect(reject).not.toBeCalled()

  const successAction = { type: 'SOMETHING_SUCCESS', data: 1 }
  for (let i = 0; i < 2; i++) {
    expect(generator.next().value).toEqual(take('*'))
    expect(generator.next(successAction).value).toEqual({ prefix: 'SOMETHING', suffix: 'SUCCESS' })
    expect(generator.next().value).toEqual({
      resolvers: {},
      rejecters: { SOMETHING: reject }
    })
  }
  expect(resolve).toHaveBeenCalledTimes(1)
  expect(resolve).toBeCalledWith({ data: 1 })
  expect(reject).not.toBeCalled()

  resolve.mockClear()

  const failureAction = { type: 'SOMETHING_FAILURE', error: 1 }
  for (let i = 0; i < 2; i++) {
    expect(generator.next().value).toEqual(take('*'))
    expect(generator.next(failureAction).value).toEqual({ prefix: 'SOMETHING', suffix: 'FAILURE' })
    expect(generator.next().value).toEqual({
      resolvers: {},
      rejecters: {}
    })
  }
  expect(resolve).not.toBeCalled()
  expect(reject).toHaveBeenCalledTimes(1)
  expect(reject).toBeCalledWith({ error: 1 })
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchResolveReject))
})
