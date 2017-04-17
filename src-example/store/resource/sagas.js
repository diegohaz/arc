// https://github.com/diegohaz/arc/wiki/Sagas
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export function* createResource(api, newData) {
  try {
    const data = yield call([api, api.post], '/resources', newData)
    yield put(actions.resourceCreateSuccess(data))
  } catch (e) {
    yield put(actions.resourceCreateFailure(e))
  }
}

export function* readResourceList(api, params) {
  try {
    const data = yield call([api, api.get], '/resources', { params })
    yield put(actions.resourceListReadSuccess(data))
  } catch (e) {
    yield put(actions.resourceListReadFailure(e))
  }
}

export function* readResourceDetail(api, needle) {
  try {
    const data = yield call([api, api.get], `/resources/${needle}`)
    yield put(actions.resourceDetailReadSuccess(needle, data))
  } catch (e) {
    yield put(actions.resourceDetailReadFailure(needle, e))
  }
}

export function* updateResource(api, needle, newData) {
  try {
    const data = yield call([api, api.put], `/resources/${needle}`, newData)
    yield put(actions.resourceUpdateSuccess(needle, data))
  } catch (e) {
    yield put(actions.resourceUpdateFailure(needle, e))
  }
}

export function* deleteResource(api, needle) {
  try {
    yield call([api, api.delete], `/resources/${needle}`)
    yield put(actions.resourceDeleteSuccess(needle))
  } catch (e) {
    yield put(actions.resourceDeleteFailure(needle, e))
  }
}

export function* watchResourceCreateRequest(api) {
  while (true) {
    const { data } = yield take(actions.RESOURCE_CREATE_REQUEST)
    yield call(createResource, api, data)
  }
}

export function* watchResourceListReadRequest(api) {
  while (true) {
    const { params } = yield take(actions.RESOURCE_LIST_READ_REQUEST)
    yield call(readResourceList, api, params)
  }
}

export function* watchResourceDetailReadRequest(api) {
  while (true) {
    const { needle } = yield take(actions.RESOURCE_DETAIL_READ_REQUEST)
    yield call(readResourceDetail, api, needle)
  }
}

export function* watchResourceUpdateRequest(api) {
  while (true) {
    const { needle, data } = yield take(actions.RESOURCE_UPDATE_REQUEST)
    yield call(updateResource, api, needle, data)
  }
}

export function* watchResourceDeleteRequest(api) {
  while (true) {
    const { needle } = yield take(actions.RESOURCE_DELETE_REQUEST)
    yield call(deleteResource, api, needle)
  }
}

export default function* ({ api }) {
  yield fork(watchResourceCreateRequest, api)
  yield fork(watchResourceListReadRequest, api)
  yield fork(watchResourceDetailReadRequest, api)
  yield fork(watchResourceUpdateRequest, api)
  yield fork(watchResourceDeleteRequest, api)
}
