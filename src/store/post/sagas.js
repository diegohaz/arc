import { take, put, call, fork } from 'redux-saga/effects'
import api from 'services/api'
import {
  postList, postCreate, postRead, postUpdate,
  POST_LIST_REQUEST, POST_CREATE_REQUEST, POST_READ_REQUEST, POST_UPDATE_REQUEST
} from './actions'

export function* createPost(newData) {
  try {
    const { data } = yield call(api.post, '/posts', newData)
    yield put(postCreate.success(data))
  } catch (e) {
    yield put(postCreate.failure(e))
  }
}

export function* readPost(id) {
  try {
    const { data } = yield call(api.get, `/posts/${id}`)
    yield put(postRead.success(data))
  } catch (e) {
    yield put(postRead.failure(e))
  }
}

export function* updatePost(oldData, newData) {
  try {
    const { data } = yield call(api.put, `/posts/${oldData.id}`, newData)
    yield put(postUpdate.success(data, newData))
  } catch (e) {
    yield put(postUpdate.failure(e))
  }
}

export function* listPosts(limit) {
  try {
    const params = { _limit: limit }
    const { data } = yield call(api.get, '/posts', { params })
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

export function* watchPostReadRequest() {
  while (true) {
    const { id } = yield take(POST_READ_REQUEST)
    yield call(readPost, id)
  }
}

export function* watchPostUpdateRequest() {
  while (true) {
    const { data, newData } = yield take(POST_UPDATE_REQUEST)
    yield call(updatePost, data, newData)
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
  yield fork(watchPostReadRequest)
  yield fork(watchPostUpdateRequest)
  yield fork(watchPostListRequest)
}
