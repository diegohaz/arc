// https://github.com/diegohaz/arc/wiki/Sagas
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export function* createResource(api, { data }) {
  try {
    const detail = yield call([api, api.post], '/resources', data)
    yield put(actions.resourceCreateSuccess(detail, { data }))
  } catch (e) {
    yield put(actions.resourceCreateFailure(e, { data }))
  }
}

export function* readResourceList(api, { params }) {
  try {
    const list = yield call([api, api.get], '/resources', { params })
    yield put(actions.resourceListReadSuccess(list, { params }))
  } catch (e) {
    yield put(actions.resourceListReadFailure(e, { params }))
  }
}

export function* readResourceDetail(api, { needle }) {
  try {
    const detail = yield call([api, api.get], `/resources/${needle}`)
    yield put(actions.resourceDetailReadSuccess(detail, { needle }))
  } catch (e) {
    yield put(actions.resourceDetailReadFailure(e, { needle }))
  }
}

export function* updateResource(api, { needle, data }) {
  try {
    const detail = yield call([api, api.put], `/resources/${needle}`, data)
    yield put(actions.resourceUpdateSuccess(detail, { needle, data }))
  } catch (e) {
    yield put(actions.resourceUpdateFailure(e, { needle, data }))
  }
}

export function* deleteResource(api, { needle }) {
  try {
    yield call([api, api.delete], `/resources/${needle}`)
    yield put(actions.resourceDeleteSuccess({ needle }))
  } catch (e) {
    yield put(actions.resourceDeleteFailure(e, { needle }))
  }
}

export function* watchResourceCreateRequest(api) {
  while (true) {
    const { payload } = yield take(actions.RESOURCE_CREATE_REQUEST)
    yield call(createResource, api, payload)
  }
}

export function* watchResourceListReadRequest(api) {
  while (true) {
    const { payload } = yield take(actions.RESOURCE_LIST_READ_REQUEST)
    yield call(readResourceList, api, payload)
  }
}

export function* watchResourceDetailReadRequest(api) {
  while (true) {
    const { payload } = yield take(actions.RESOURCE_DETAIL_READ_REQUEST)
    yield call(readResourceDetail, api, payload)
  }
}

export function* watchResourceUpdateRequest(api) {
  while (true) {
    const { payload } = yield take(actions.RESOURCE_UPDATE_REQUEST)
    yield call(updateResource, api, payload)
  }
}

export function* watchResourceDeleteRequest(api) {
  while (true) {
    const { payload } = yield take(actions.RESOURCE_DELETE_REQUEST)
    yield call(deleteResource, api, payload)
  }
}

export default function* ({ api }) {
  yield fork(watchResourceCreateRequest, api)
  yield fork(watchResourceListReadRequest, api)
  yield fork(watchResourceDetailReadRequest, api)
  yield fork(watchResourceUpdateRequest, api)
  yield fork(watchResourceDeleteRequest, api)
}
