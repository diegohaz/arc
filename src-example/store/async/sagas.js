// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#async
import { fork, call, take, race, takeEvery } from 'redux-saga/effects'

const requestPattern = /_REQUEST$/
const successSuffix = '_SUCCESS'
const failureSuffix = '_FAILURE'

export const matchRequest = ({ type, meta }) => {
  if (!meta || !meta.async || typeof meta.async.done !== 'function') {
    return false
  }
  return requestPattern.test(type)
}

export const matchResponse = (wantedType, key) => ({ type, meta }) => {
  if (wantedType === type) {
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#solving-race-conflicts
    if (meta && meta.async && typeof meta.async.key !== 'undefined') {
      return meta.async.key === key
    }
    return true
  }
  return false
}

export function* handleResponse({ type, meta }) {
  const prefix = type.replace(requestPattern, '')
  const { success, failure } = yield race({
    success: take(matchResponse(prefix + successSuffix, meta.async.key)),
    failure: take(matchResponse(prefix + failureSuffix, meta.async.key)),
  })

  if (success) {
    yield call(meta.async.done, null, success.payload)
  } else {
    yield call(meta.async.done, failure.payload)
  }
}

export function* watchRequestActions() {
  yield takeEvery(matchRequest, handleResponse)
}

export default function* () {
  yield fork(watchRequestActions)
}
