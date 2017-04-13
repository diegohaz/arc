import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import * as actions from './actions'

export function* createPost(newData) {
  try {
    const data = yield call(api.post, '/posts', newData)
    yield put(actions.postCreateSuccess(data))
  } catch (e) {
    yield put(actions.postCreateFailure(e))
  }
}

export function* readPostList(params) {
  try {
    const data = yield call(api.get, '/posts', { params })
    yield put(actions.postListReadSuccess(data))
  } catch (e) {
    yield put(actions.postListReadFailure(e))
  }
}

export function* watchPostCreateRequest() {
  while (true) {
    const { data } = yield take(actions.POST_CREATE_REQUEST)
    yield call(createPost, data)
  }
}

export function* watchPostListReadRequest() {
  while (true) {
    const { params } = yield take(actions.POST_LIST_READ_REQUEST)
    yield call(readPostList, params)
  }
}

export default function* () {
  yield fork(watchPostCreateRequest)
  yield fork(watchPostListReadRequest)
}
