// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'

const api = {
  post: () => {},
  get: () => {},
  put: () => {},
  delete: () => {},
}

describe('createPost', () => {
  const payload = { data: 'foo' }

  it('calls success', () => {
    const detail = 'detail'
    const generator = sagas.createPost(api, payload)
    expect(generator.next().value)
      .toEqual(call([api, api.post], '/posts', 'foo'))
    expect(generator.next(detail).value)
      .toEqual(put(actions.postCreateSuccess(detail, payload)))
  })

  it('calls failure', () => {
    const generator = sagas.createPost(api, payload)
    expect(generator.next().value)
      .toEqual(call([api, api.post], '/posts', 'foo'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.postCreateFailure('test', payload)))
  })
})

describe('readPostList', () => {
  const payload = { params: { _limit: 1 } }

  it('calls success', () => {
    const detail = [1, 2, 3]
    const generator = sagas.readPostList(api, payload)
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/posts', payload))
    expect(generator.next(detail).value)
      .toEqual(put(actions.postListReadSuccess(detail, payload)))
  })

  it('calls failure', () => {
    const generator = sagas.readPostList(api, payload)
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/posts', payload))
    expect(generator.throw('test').value)
      .toEqual(put(actions.postListReadFailure('test', payload)))
  })
})

test('watchPostCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchPostCreateRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.POST_CREATE_REQUEST))
  expect(generator.next({ payload }).value)
    .toEqual(call(sagas.createPost, api, payload))
})

test('watchPostListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchPostListReadRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.POST_LIST_READ_REQUEST))
  expect(generator.next({ payload }).value)
    .toEqual(call(sagas.readPostList, api, payload))
})

test('saga', () => {
  const generator = saga({ api })
  expect(generator.next().value).toEqual(fork(sagas.watchPostCreateRequest, api))
  expect(generator.next().value).toEqual(fork(sagas.watchPostListReadRequest, api))
})
