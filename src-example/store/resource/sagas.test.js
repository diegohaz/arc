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

describe('createResource', () => {
  const data = { title: 'test' }

  it('calls success', () => {
    const generator = sagas.createResource(api, data)
    expect(generator.next().value)
      .toEqual(call([api, api.post], '/resources', data))
    expect(generator.next(data).value)
      .toEqual(put(actions.resourceCreateSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.createResource(api, data)
    expect(generator.next().value)
      .toEqual(call([api, api.post], '/resources', data))
    expect(generator.throw('test').value)
      .toEqual(put(actions.resourceCreateFailure('test')))
  })
})

describe('readResourceList', () => {
  it('calls success', () => {
    const data = [1, 2, 3]
    const generator = sagas.readResourceList(api, { _limit: 1 })
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/resources', { params: { _limit: 1 } }))
    expect(generator.next(data).value)
      .toEqual(put(actions.resourceListReadSuccess(data)))
  })

  it('calls failure', () => {
    const generator = sagas.readResourceList(api, { _limit: 1 })
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/resources', { params: { _limit: 1 } }))
    expect(generator.throw('test').value)
      .toEqual(put(actions.resourceListReadFailure('test')))
  })
})

describe('readResourceDetail', () => {
  it('calls success', () => {
    const data = { id: 1 }
    const generator = sagas.readResourceDetail(api, 1)
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/resources/1'))
    expect(generator.next(data).value)
      .toEqual(put(actions.resourceDetailReadSuccess(1, data)))
  })

  it('calls failure', () => {
    const generator = sagas.readResourceDetail(api, 1)
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/resources/1'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.resourceDetailReadFailure(1, 'test')))
  })
})

describe('updateResource', () => {
  it('calls success', () => {
    const data = { id: 1 }
    const generator = sagas.updateResource(api, 1, { title: 'foo' })
    expect(generator.next().value)
      .toEqual(call([api, api.put], '/resources/1', { title: 'foo' }))
    expect(generator.next(data).value)
      .toEqual(put(actions.resourceUpdateSuccess(1, data)))
  })

  it('calls failure', () => {
    const generator = sagas.updateResource(api, 1, { title: 'foo' })
    expect(generator.next().value)
      .toEqual(call([api, api.put], '/resources/1', { title: 'foo' }))
    expect(generator.throw('test').value)
      .toEqual(put(actions.resourceUpdateFailure(1, 'test')))
  })
})

describe('deleteResource', () => {
  it('calls success', () => {
    const generator = sagas.deleteResource(api, 1)
    expect(generator.next().value)
      .toEqual(call([api, api.delete], '/resources/1'))
    expect(generator.next().value)
      .toEqual(put(actions.resourceDeleteSuccess(1)))
  })

  it('calls failure', () => {
    const generator = sagas.deleteResource(api, 1)
    expect(generator.next().value)
      .toEqual(call([api, api.delete], '/resources/1'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.resourceDeleteFailure(1, 'test')))
  })
})

test('watchResourceCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchResourceCreateRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.RESOURCE_CREATE_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.createResource, api, ...Object.values(payload)))
})

test('watchResourceListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchResourceListReadRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.RESOURCE_LIST_READ_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.readResourceList, api, ...Object.values(payload)))
})

test('watchResourceDetailReadRequest', () => {
  const payload = { needle: 1 }
  const generator = sagas.watchResourceDetailReadRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.RESOURCE_DETAIL_READ_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.readResourceDetail, api, ...Object.values(payload)))
})

test('watchResourceUpdateRequest', () => {
  const payload = { needle: 1, data: { id: 1 } }
  const generator = sagas.watchResourceUpdateRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.RESOURCE_UPDATE_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.updateResource, api, ...Object.values(payload)))
})

test('watchResourceDeleteRequest', () => {
  const payload = { needle: 1 }
  const generator = sagas.watchResourceDeleteRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.RESOURCE_DELETE_REQUEST))
  expect(generator.next(payload).value)
    .toEqual(call(sagas.deleteResource, api, ...Object.values(payload)))
})

test('saga', () => {
  const generator = saga({ api })
  expect(generator.next().value).toEqual(fork(sagas.watchResourceCreateRequest, api))
  expect(generator.next().value).toEqual(fork(sagas.watchResourceListReadRequest, api))
  expect(generator.next().value).toEqual(fork(sagas.watchResourceDetailReadRequest, api))
  expect(generator.next().value).toEqual(fork(sagas.watchResourceUpdateRequest, api))
  expect(generator.next().value).toEqual(fork(sagas.watchResourceDeleteRequest, api))
})
