// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#post
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export function* createPost(api, { data }, { async }) {
  try {
    // https://github.com/diegohaz/arc/wiki/API-service
    const detail = yield call([api, api.post], '/posts', data)
    // https://github.com/diegohaz/arc/wiki/Actions#async-actions
    yield put(actions.postCreateSuccess(detail, { data }, async.key))
  } catch (e) {
    yield put(actions.postCreateFailure(e, { data }, async.key))
  }
}

export function* readPostList(api, { params }, { async }) {
  try {
    const list = yield call([api, api.get], '/posts', { params })
    yield put(actions.postListReadSuccess(list, { params }, async.key))
  } catch (e) {
    yield put(actions.postListReadFailure(e, { params }, async.key))
  }
}

export function* watchPostCreateRequest(api) {
  while (true) {
    const { payload, meta } = yield take(actions.POST_CREATE_REQUEST)
    yield call(createPost, api, payload, meta)
  }
}

export function* watchPostListReadRequest(api) {
  while (true) {
    const { payload, meta } = yield take(actions.POST_LIST_READ_REQUEST)
    yield call(readPostList, api, payload, meta)
  }
}

export default function* ({ api }) {
  yield fork(watchPostCreateRequest, api)
  yield fork(watchPostListReadRequest, api)
}
