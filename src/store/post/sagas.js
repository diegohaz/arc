import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import { postList, postCreate, POST_LIST_REQUEST, POST_CREATE_REQUEST } from './actions'

export function* createPost(newData) {
  try {
    const { data } = yield call(api.post, '/posts', newData)
    yield put(postCreate.success(data))
  } catch (e) {
    yield put(postCreate.failure(e))
  }
}

export function* listPosts(limit) {
  try {
    const data = yield call(api.get, `/posts?_limit=${limit}`)
    yield put(postList.success(data))
  } catch (e) {
    yield put(postList.failure(e))
  }
}

export function* watchPostCreateRequest() {
  while (true) {
    const { data } = yield take(POST_CREATE_REQUEST)
    yield call(createPost, data)
  }
}

export function* watchPostListRequest() {
  while (true) {
    const { limit } = yield take(POST_LIST_REQUEST)
    yield call(listPosts, limit)
  }
}

export default function* () {
  yield fork(watchPostCreateRequest)
  yield fork(watchPostListRequest)
}
