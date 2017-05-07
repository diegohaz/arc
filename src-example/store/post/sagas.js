// https://github.com/diegohaz/arc/wiki/Sagas
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export function* createPost(api, { data }) {
  try {
    const detail = yield call([api, api.post], '/posts', data)
    yield put(actions.postCreateSuccess(detail, { data }))
  } catch (e) {
    yield put(actions.postCreateFailure(e, { data }))
  }
}

export function* readPostList(api, { params }) {
  try {
    const list = yield call([api, api.get], '/posts', { params })
    yield put(actions.postListReadSuccess(list, { params }))
  } catch (e) {
    yield put(actions.postListReadFailure(e, { params }))
  }
}

export function* watchPostCreateRequest(api) {
  while (true) {
    const { payload } = yield take(actions.POST_CREATE_REQUEST)
    yield call(createPost, api, payload)
  }
}

export function* watchPostListReadRequest(api) {
  while (true) {
    const { payload } = yield take(actions.POST_LIST_READ_REQUEST)
    yield call(readPostList, api, payload)
  }
}

export default function* ({ api }) {
  yield fork(watchPostCreateRequest, api)
  yield fork(watchPostListReadRequest, api)
}
