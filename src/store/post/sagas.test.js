import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import api from 'services/api'
import saga, * as sagas from './sagas'

describe('createPost', () => {
  const data = { id: 1, title: 'test' }

  it('calls success', () => {
    const generator = sagas.createPost(data)
    expect(generator.next().value).toEqual(call(api.post, '/posts', data))
    expect(generator.next({ data }).value).toEqual(put(actions.postCreate.success(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createPost(data)
    expect(generator.next().value).toEqual(call(api.post, '/posts', data))
    expect(generator.throw('test').value).toEqual(put(actions.postCreate.failure('test')))
  })
})

describe('listPosts', () => {
  const data = [1, 2, 3]

  it('calls success', () => {
    const generator = sagas.listPosts(1)
    expect(generator.next().value).toEqual(call(api.get, '/posts', { params: { _limit: 1 } }))
    expect(generator.next({ data }).value).toEqual(put(actions.postList.success(data)))
  })

  it('calls failure', () => {
    const generator = sagas.listPosts(1)
    expect(generator.next().value).toEqual(call(api.get, '/posts', { params: { _limit: 1 } }))
    expect(generator.throw('test').value).toEqual(put(actions.postList.failure('test')))
  })
})

test('watchPostCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchPostCreateRequest()
  expect(generator.next().value).toEqual(take(actions.POST_CREATE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.createPost, ...Object.values(payload)))
})

test('watchPostListRequest', () => {
  const payload = { limit: 1 }
  const generator = sagas.watchPostListRequest()
  expect(generator.next().value).toEqual(take(actions.POST_LIST_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.listPosts, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchPostCreateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchPostListRequest))
})
