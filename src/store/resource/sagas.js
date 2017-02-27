import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

export function* createResource(newData) {
  try {
    const data = yield call(api.post, '/resources', newData)
    yield put(actions.resourceCreateSuccess(data))
  } catch (e) {
    yield put(actions.resourceCreateFailure(e))
  }
}

export function* readResourceList(params) {
  try {
    const data = yield call(api.get, '/resources', { params })
    yield put(actions.resourceListReadSuccess(data))
  } catch (e) {
    yield put(actions.resourceListReadFailure(e))
  }
}

export function* readResourceDetail(needle) {
  try {
    const data = yield call(api.get, `/resources/${needle}`)
    yield put(actions.resourceDetailReadSuccess(needle, data))
  } catch (e) {
    yield put(actions.resourceDetailReadFailure(needle, e))
  }
}

export function* updateResource(needle, newData) {
  try {
    const data = yield call(api.put, `/resources/${needle}`, newData)
    yield put(actions.resourceUpdateSuccess(needle, data))
  } catch (e) {
    yield put(actions.resourceUpdateFailure(needle, e))
  }
}

export function* deleteResource(needle) {
  try {
    yield call(api.delete, `/resources/${needle}`)
    yield put(actions.resourceDeleteSuccess(needle))
  } catch (e) {
    yield put(actions.resourceDeleteFailure(needle, e))
  }
}

export function* watchResourceCreateRequest() {
  while (true) {
    const { data } = yield take(actions.RESOURCE_CREATE_REQUEST)
    yield call(createResource, data)
  }
}

export function* watchResourceListReadRequest() {
  while (true) {
    const { params } = yield take(actions.RESOURCE_LIST_READ_REQUEST)
    yield call(readResourceList, params)
  }
}

export function* watchResourceDetailReadRequest() {
  while (true) {
    const { needle } = yield take(actions.RESOURCE_DETAIL_READ_REQUEST)
    yield call(readResourceDetail, needle)
  }
}

export function* watchResourceUpdateRequest() {
  while (true) {
    const { needle, data } = yield take(actions.RESOURCE_UPDATE_REQUEST)
    yield call(updateResource, needle, data)
  }
}

export function* watchResourceDeleteRequest() {
  while (true) {
    const { needle } = yield take(actions.RESOURCE_DELETE_REQUEST)
    yield call(deleteResource, needle)
  }
}

export default function* () {
  yield fork(watchResourceCreateRequest)
  yield fork(watchResourceListReadRequest)
  yield fork(watchResourceDetailReadRequest)
  yield fork(watchResourceUpdateRequest)
  yield fork(watchResourceDeleteRequest)
}
