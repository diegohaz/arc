// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'

const api = {
  post: () => {},
  get: () => {},
  put: () => {},
  delete: () => {},
}

const key = '123'
const meta = { async: { key } }

describe('createResource', () => {
  const payload = { data: 'foo' }

  it('calls success', () => {
    const detail = 'detail'
    const generator = sagas.createResource(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.post], '/resources', 'foo'))
    expect(generator.next(detail).value)
      .toEqual(put(actions.resourceCreateSuccess(detail, payload, key)))
  })

  it('calls failure', () => {
    const generator = sagas.createResource(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.post], '/resources', 'foo'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.resourceCreateFailure('test', payload, key)))
  })
})

describe('readResourceList', () => {
  const payload = { params: { _limit: 1 } }

  it('calls success', () => {
    const detail = [1, 2, 3]
    const generator = sagas.readResourceList(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/resources', payload))
    expect(generator.next(detail).value)
      .toEqual(put(actions.resourceListReadSuccess(detail, payload, key)))
  })

  it('calls failure', () => {
    const generator = sagas.readResourceList(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/resources', payload))
    expect(generator.throw('test').value)
      .toEqual(put(actions.resourceListReadFailure('test', payload, key)))
  })
})

describe('readResourceDetail', () => {
  const payload = { needle: 1 }

  it('calls success', () => {
    const detail = 'foo'
    const generator = sagas.readResourceDetail(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/resources/1'))
    expect(generator.next(detail).value)
      .toEqual(put(actions.resourceDetailReadSuccess(detail, payload, key)))
  })

  it('calls failure', () => {
    const generator = sagas.readResourceDetail(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.get], '/resources/1'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.resourceDetailReadFailure('test', payload, key)))
  })
})

describe('updateResource', () => {
  const payload = { needle: 1, data: 'foo' }

  it('calls success', () => {
    const detail = 'foo'
    const generator = sagas.updateResource(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.put], '/resources/1', 'foo'))
    expect(generator.next(detail).value)
      .toEqual(put(actions.resourceUpdateSuccess(detail, payload, key)))
  })

  it('calls failure', () => {
    const generator = sagas.updateResource(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.put], '/resources/1', 'foo'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.resourceUpdateFailure('test', payload, key)))
  })
})

describe('deleteResource', () => {
  const payload = { needle: 1 }

  it('calls success', () => {
    const generator = sagas.deleteResource(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.delete], '/resources/1'))
    expect(generator.next().value)
      .toEqual(put(actions.resourceDeleteSuccess(payload, key)))
  })

  it('calls failure', () => {
    const generator = sagas.deleteResource(api, payload, meta)
    expect(generator.next().value)
      .toEqual(call([api, api.delete], '/resources/1'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.resourceDeleteFailure('test', payload, key)))
  })
})

test('watchResourceCreateRequest', () => {
  const payload = { data: 1 }
  const generator = sagas.watchResourceCreateRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.RESOURCE_CREATE_REQUEST))
  expect(generator.next({ payload, meta }).value)
    .toEqual(call(sagas.createResource, api, payload, meta))
})

test('watchResourceListReadRequest', () => {
  const payload = { params: { _limit: 1 } }
  const generator = sagas.watchResourceListReadRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.RESOURCE_LIST_READ_REQUEST))
  expect(generator.next({ payload, meta }).value)
    .toEqual(call(sagas.readResourceList, api, payload, meta))
})

test('watchResourceDetailReadRequest', () => {
  const payload = { needle: 1 }
  const generator = sagas.watchResourceDetailReadRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.RESOURCE_DETAIL_READ_REQUEST))
  expect(generator.next({ payload, meta }).value)
    .toEqual(call(sagas.readResourceDetail, api, payload, meta))
})

test('watchResourceUpdateRequest', () => {
  const payload = { needle: 1, data: { id: 1 } }
  const generator = sagas.watchResourceUpdateRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.RESOURCE_UPDATE_REQUEST))
  expect(generator.next({ payload, meta }).value)
    .toEqual(call(sagas.updateResource, api, payload, meta))
})

test('watchResourceDeleteRequest', () => {
  const payload = { needle: 1 }
  const generator = sagas.watchResourceDeleteRequest(api)
  expect(generator.next().value)
    .toEqual(take(actions.RESOURCE_DELETE_REQUEST))
  expect(generator.next({ payload, meta }).value)
    .toEqual(call(sagas.deleteResource, api, payload, meta))
})

test('saga', () => {
  const generator = saga({ api })
  expect(generator.next().value).toEqual(fork(sagas.watchResourceCreateRequest, api))
  expect(generator.next().value).toEqual(fork(sagas.watchResourceListReadRequest, api))
  expect(generator.next().value).toEqual(fork(sagas.watchResourceDetailReadRequest, api))
  expect(generator.next().value).toEqual(fork(sagas.watchResourceUpdateRequest, api))
  expect(generator.next().value).toEqual(fork(sagas.watchResourceDeleteRequest, api))
})
