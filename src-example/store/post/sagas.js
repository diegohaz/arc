// https://github.com/diegohaz/arc/wiki/Sagas
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export function* createPost(api, newData) {
  try {
    const data = yield call([api, api.post], '/posts', newData)
    yield put(actions.postCreateSuccess(data))
  } catch (e) {
    yield put(actions.postCreateFailure(e))
  }
}

export function* readPostList(api, params) {
  try {
    const data = yield call([api, api.get], '/posts', { params })
    yield put(actions.postListReadSuccess(data))
  } catch (e) {
    yield put(actions.postListReadFailure(e))
  }
}

export function* watchPostCreateRequest(api) {
  while (true) {
    const { data } = yield take(actions.POST_CREATE_REQUEST)
    yield call(createPost, api, data)
  }
}

export function* watchPostListReadRequest(api) {
  while (true) {
    const { params } = yield take(actions.POST_LIST_READ_REQUEST)
    yield call(readPostList, api, params)
  }
}

export default function* ({ api }) {
  yield fork(watchPostCreateRequest, api)
  yield fork(watchPostListReadRequest, api)
}
