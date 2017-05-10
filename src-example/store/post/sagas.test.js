// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#post
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'

const api = {
  post: () => {},
  get: () => {},
}

const key = '123'
const meta = { async: { key } }

describe('createPost', () => {
  const payload = { data: 'foo' }

  it('calls success', () => {
    const detail = 'detail'
    const generator = sagas.createPost(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.post], '/posts', 'foo'))
    expect(generator.next(detail).value)
      .toEqual(put(actions.postCreateSuccess(detail, payload, key)))
  })

  it('calls failure', () => {
    const generator = sagas.createPost(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.post], '/posts', 'foo'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.postCreateFailure('test', payload, key)))
  })
})

describe('readPostList', () => {
  const payload = { params: { _limit: 1 } }

  it('calls success', () => {
    const detail = [1, 2, 3]
    const generator = sagas.readPostList(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/posts', payload))
    expect(generator.next(detail).value)
      .toEqual(put(actions.postListReadSuccess(detail, payload, key)))
  })

  it('calls failure', () => {
    const generator = sagas.readPostList(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/posts', payload))
    expect(generator.throw('test').value)
      .toEqual(put(actions.postListReadFailure('test', payload, key)))
  })
})

test('watchPostCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchPostCreateRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.POST_CREATE_REQUEST))
  expect(generator.next({ payload, meta }).value)
    .toEqual(call(sagas.createPost, api, payload, meta))
})

test('watchPostListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchPostListReadRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.POST_LIST_READ_REQUEST))
  expect(generator.next({ payload, meta }).value)
    .toEqual(call(sagas.readPostList, api, payload, meta))
})

test('saga', () => {
  const generator = saga({ api })
  expect(generator.next().value).toEqual(fork(sagas.watchPostCreateRequest, api))
  expect(generator.next().value).toEqual(fork(sagas.watchPostListReadRequest, api))
})
