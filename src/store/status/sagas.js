import { takeEvery } from 'redux-saga'
import { fork, call, take, race } from 'redux-saga/effects'

const requestPattern = /_REQUEST$/
const successSuffix = '_SUCCESS'
const failureSuffix = '_FAILURE'

export const matchesRequest = ({ type, resolve, reject }) => {
  if (typeof resolve !== 'function' && typeof reject !== 'function') {
    return false
  }
  return requestPattern.test(type)
}

export function* resolveOrReject ({ type, resolve, reject }) {
  const prefix = type.replace(requestPattern, '')
  const { success, failure } = yield race({
    success: take(prefix + successSuffix),
    failure: take(prefix + failureSuffix)
  })

  if (success && typeof resolve === 'function') {
    delete success.type
    yield call(resolve, success)
  } else if (failure && typeof reject === 'function') {
    delete failure.type
    yield call(reject, failure)
  }
}

export function* watchRequestActions () {
  yield call(takeEvery, matchesRequest, resolveOrReject)
}

export default function* () {
  yield fork(watchRequestActions)
}
