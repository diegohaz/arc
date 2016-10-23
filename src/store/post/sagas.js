import { take, put, call, fork } from 'redux-saga/effects'
import { postList, postCreate, POST_LIST_REQUEST, POST_CREATE_REQUEST } from './actions'
import api from 'services/api'

const fn = () => true

export function* createPost (newData, resolve = fn, reject = fn) {
  try {
    const { data } = yield call(api.post, '/posts', { id: 1, ...newData })
    resolve(data)
    yield put(postCreate.success(data))
  } catch (e) {
    reject(e)
    yield put(postCreate.failure(e))
  }
}

export function* listPosts (limit, resolve = fn, reject = fn) {
  try {
    const params = { _limit: limit }
    const { data } = yield call(api.get, '/posts', { params })
    resolve(data)
    yield put(postList.success(data))
  } catch (e) {
    reject(e)
    yield put(postList.failure(e))
  }
}

export function* watchPostCreateRequest () {
  while (true) {
    const { data, resolve, reject } = yield take(POST_CREATE_REQUEST)
    yield call(createPost, data, resolve, reject)
  }
}

export function* watchPostListRequest () {
  while (true) {
    const { limit, resolve, reject } = yield take(POST_LIST_REQUEST)
    yield call(listPosts, limit, resolve, reject)
  }
}

export default function* () {
  yield fork(watchPostCreateRequest)
  yield fork(watchPostListRequest)
}
