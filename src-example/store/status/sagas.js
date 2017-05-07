// https://github.com/diegohaz/arc/wiki/Sagas
import { fork, call, take, race, takeEvery } from 'redux-saga/effects'

const requestPattern = /_REQUEST$/
const successSuffix = '_SUCCESS'
const failureSuffix = '_FAILURE'

export const matchesRequest = ({ type, meta }) => {
  if (!meta) return false
  if (typeof meta.resolve !== 'function' && typeof meta.reject !== 'function') {
    return false
  }
  return requestPattern.test(type)
}

export function* resolveOrReject({ type, meta }) {
  const prefix = type.replace(requestPattern, '')
  const { resolve, reject } = meta
  const { success, failure } = yield race({
    success: take(prefix + successSuffix),
    failure: take(prefix + failureSuffix),
  })

  if (success && typeof resolve === 'function') {
    yield call(resolve, success.payload)
  } else if (failure && typeof reject === 'function') {
    yield call(reject, failure.payload)
  }
}

export function* watchRequestActions() {
  yield takeEvery(matchesRequest, resolveOrReject)
}

export default function* () {
  yield fork(watchRequestActions)
}
