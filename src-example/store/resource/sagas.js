// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export function* createResource(api, { data }, { async }) {
  try {
    // https://github.com/diegohaz/arc/wiki/API-service
    const detail = yield call([api, api.post], '/resources', data)
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    yield put(actions.resourceCreateSuccess(detail, { data }, async.key))
  } catch (e) {
    yield put(actions.resourceCreateFailure(e, { data }, async.key))
  }
}

export function* readResourceList(api, { params }, { async }) {
  try {
    const list = yield call([api, api.get], '/resources', { params })
    yield put(actions.resourceListReadSuccess(list, { params }, async.key))
  } catch (e) {
    yield put(actions.resourceListReadFailure(e, { params }, async.key))
  }
}

export function* readResourceDetail(api, { needle }, { async }) {
  try {
    const detail = yield call([api, api.get], `/resources/${needle}`)
    yield put(actions.resourceDetailReadSuccess(detail, { needle }, async.key))
  } catch (e) {
    yield put(actions.resourceDetailReadFailure(e, { needle }, async.key))
  }
}

export function* updateResource(api, { needle, data }, { async }) {
  try {
    const detail = yield call([api, api.put], `/resources/${needle}`, data)
    yield put(actions.resourceUpdateSuccess(detail, { needle, data }, async.key))
  } catch (e) {
    yield put(actions.resourceUpdateFailure(e, { needle, data }, async.key))
  }
}

export function* deleteResource(api, { needle }, { async }) {
  try {
    yield call([api, api.delete], `/resources/${needle}`)
    yield put(actions.resourceDeleteSuccess({ needle }, async.key))
  } catch (e) {
    yield put(actions.resourceDeleteFailure(e, { needle }, async.key))
  }
}

export function* watchResourceCreateRequest(api) {
  while (true) {
    const { payload, meta } = yield take(actions.RESOURCE_CREATE_REQUEST)
    yield call(createResource, api, payload, meta)
  }
}

export function* watchResourceListReadRequest(api) {
  while (true) {
    const { payload, meta } = yield take(actions.RESOURCE_LIST_READ_REQUEST)
    yield call(readResourceList, api, payload, meta)
  }
}

export function* watchResourceDetailReadRequest(api) {
  while (true) {
    const { payload, meta } = yield take(actions.RESOURCE_DETAIL_READ_REQUEST)
    yield call(readResourceDetail, api, payload, meta)
  }
}

export function* watchResourceUpdateRequest(api) {
  while (true) {
    const { payload, meta } = yield take(actions.RESOURCE_UPDATE_REQUEST)
    yield call(updateResource, api, payload, meta)
  }
}

export function* watchResourceDeleteRequest(api) {
  while (true) {
    const { payload, meta } = yield take(actions.RESOURCE_DELETE_REQUEST)
    yield call(deleteResource, api, payload, meta)
  }
}

export default function* ({ api }) {
  yield fork(watchResourceCreateRequest, api)
  yield fork(watchResourceListReadRequest, api)
  yield fork(watchResourceDetailReadRequest, api)
  yield fork(watchResourceUpdateRequest, api)
  yield fork(watchResourceDeleteRequest, api)
}
