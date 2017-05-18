// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export function* createResource(api, { data }, { thunk }) {
  try {
    // https://github.com/diegohaz/arc/wiki/API-service
    const detail = yield call([api, api.post], '/resources', data)
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    yield put(actions.resourceCreateSuccess(detail, { data }, thunk))
  } catch (e) {
    yield put(actions.resourceCreateFailure(e, { data }, thunk))
  }
}

export function* readResourceList(api, { params }, { thunk }) {
  try {
    const list = yield call([api, api.get], '/resources', { params })
    yield put(actions.resourceListReadSuccess(list, { params }, thunk))
  } catch (e) {
    yield put(actions.resourceListReadFailure(e, { params }, thunk))
  }
}

export function* readResourceDetail(api, { needle }, { thunk }) {
  try {
    const detail = yield call([api, api.get], `/resources/${needle}`)
    yield put(actions.resourceDetailReadSuccess(detail, { needle }, thunk))
  } catch (e) {
    yield put(actions.resourceDetailReadFailure(e, { needle }, thunk))
  }
}

export function* updateResource(api, { needle, data }, { thunk }) {
  try {
    const detail = yield call([api, api.put], `/resources/${needle}`, data)
    yield put(actions.resourceUpdateSuccess(detail, { needle, data }, thunk))
  } catch (e) {
    yield put(actions.resourceUpdateFailure(e, { needle, data }, thunk))
  }
}

export function* deleteResource(api, { needle }, { thunk }) {
  try {
    yield call([api, api.delete], `/resources/${needle}`)
    yield put(actions.resourceDeleteSuccess({ needle }, thunk))
  } catch (e) {
    yield put(actions.resourceDeleteFailure(e, { needle }, thunk))
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
