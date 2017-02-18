import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'
import saga, * as sagas from './sagas'

describe('createPost', () => {
  const data = { title: 'test' }

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

describe('readPost', () => {
  const data = 1

  it('calls success', () => {
    const generator = sagas.readPost(data)
    expect(generator.next().value).toEqual(call(api.get, `/posts/${data}`))
    expect(generator.next({ data }).value).toEqual(put(actions.postRead.success(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readPost(data)
    expect(generator.next().value).toEqual(call(api.get, `/posts/${data}`))
    expect(generator.throw('test').value).toEqual(put(actions.postRead.failure('test')))
  })
})

describe('updatePost', () => {
  const data = { id: 1, title: 'test'}
  const newData = { id: 1, title: 'test 2'}

  it('calls success', () => {
    const generator = sagas.updatePost(data, newData)
    expect(generator.next().value).toEqual(call(api.put, `/posts/${data.id}`, newData))
    expect(generator.next({ data }).value).toEqual(put(actions.postUpdate.success(data, newData)))
  })

  it('calls failure', () => {
    const generator = sagas.updatePost(data, newData)
    expect(generator.next().value).toEqual(call(api.put, `/posts/${data.id}`, newData))
    expect(generator.throw('test').value).toEqual(put(actions.postUpdate.failure('test')))
  })
})

describe('deletePost', () => {
  const data = 1

  it('calls success', () => {
    const generator = sagas.deletePost(data)
    expect(generator.next().value).toEqual(call(api.delete, `/posts/${data}`))
    expect(generator.next({ data }).value).toEqual(put(actions.postDelete.success(data)))
  })

  it('calls failure', () => {
    const generator = sagas.deletePost(data)
    expect(generator.next().value).toEqual(call(api.delete, `/posts/${data}`))
    expect(generator.throw('test').value).toEqual(put(actions.postDelete.failure('test')))
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

test('watchPostReadRequest', () => {
  const payload = { id: 1 }
  const generator = sagas.watchPostReadRequest()
  expect(generator.next().value).toEqual(take(actions.POST_READ_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.readPost, ...Object.values(payload)))
})

test('watchPostUpdateRequest', () => {
  const payload = { data: 1, newData: 2 }
  const generator = sagas.watchPostUpdateRequest()
  expect(generator.next().value).toEqual(take(actions.POST_UPDATE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.updatePost, ...Object.values(payload)))
})

test('watchPostDeleteRequest', () => {
  const payload = { id: 1 }
  const generator = sagas.watchPostDeleteRequest()
  expect(generator.next().value).toEqual(take(actions.POST_DELETE_REQUEST))
  expect(generator.next(payload).value).toEqual(call(sagas.deletePost, ...Object.values(payload)))
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
  expect(generator.next().value).toEqual(fork(sagas.watchPostReadRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchPostUpdateRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchPostDeleteRequest))
  expect(generator.next().value).toEqual(fork(sagas.watchPostListRequest))
})
