// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'

const api = {
  post: () => {},
  get: () => {},
}

describe('createPost', () => {
  const data = { title: 'test' }

  it('calls success', () => {
    const generator = sagas.createPost(api, data)
    expect(generator.next().value)
      .toEqual(call([api, api.post], '/posts', data))
    expect(generator.next(data).value)
      .toEqual(put(actions.postCreateSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createPost(api, data)
    expect(generator.next().value)
      .toEqual(call([api, api.post], '/posts', data))
    expect(generator.throw('test').value)
      .toEqual(put(actions.postCreateFailure('test')))
  })
})

describe('readPostList', () => {
  it('calls success', () => {
    const data = [1, 2, 3]
    const generator = sagas.readPostList(api, { _limit: 1 })
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/posts', { params: { _limit: 1 } }))
    expect(generator.next(data).value)
      .toEqual(put(actions.postListReadSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readPostList(api, { _limit: 1 })
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/posts', { params: { _limit: 1 } }))
    expect(generator.throw('test').value)
      .toEqual(put(actions.postListReadFailure('test')))
  })
})

test('watchPostCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchPostCreateRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.POST_CREATE_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.createPost, api, ...Object.values(payload)))
})

test('watchPostListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchPostListReadRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.POST_LIST_READ_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.readPostList, api, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga({ api })
  expect(generator.next().value)
    .toEqual(fork(sagas.watchPostCreateRequest, api))
  expect(generator.next().value)
    .toEqual(fork(sagas.watchPostListReadRequest, api))
})
