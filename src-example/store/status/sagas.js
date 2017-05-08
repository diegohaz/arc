// https://github.com/diegohaz/arc/wiki/Sagas
import { fork, call, take, race, takeEvery } from 'redux-saga/effects'

const requestPattern = /_REQUEST$/
const successSuffix = '_SUCCESS'
const failureSuffix = '_FAILURE'

export const matchesRequest = ({ type, meta }) => {
  if (!meta || typeof meta.done !== 'function') {
    return false
  }
  return requestPattern.test(type)
}

export function* handleDone({ type, meta }) {
  const prefix = type.replace(requestPattern, '')
  const { success, failure } = yield race({
    success: take(prefix + successSuffix),
    failure: take(prefix + failureSuffix),
  })

  if (success) {
    yield call(meta.done, null, success.payload)
  } else {
    yield call(meta.done, failure.payload)
  }
}

export function* watchRequestActions() {
  yield takeEvery(matchesRequest, handleDone)
}

export default function* () {
  yield fork(watchRequestActions)
}
