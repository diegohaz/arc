// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
import loadScript from 'simple-load-script'
import { all, take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export function* track(type, { gtm } = {}) {
  const payload = { event: type, label: gtm }
  try {
    // istanbul ignore next
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(payload)
    yield payload
  } catch (e) {
    yield put(actions.gtmFailure(e, payload))
  }
}

export function* startGTM({ gtmId }) {
  try {
    // istanbul ignore next
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'gtm.js',
      'gtm.start': new Date().getTime(),
    })
    yield call(loadScript, `//www.googletagmanager.com/gtm.js?id=${gtmId}`)
  } catch (e) {
    yield put(actions.gtmFailure(e, { gtmId }))
  }
}

export function* watchAllActions() {
  while (true) {
    const { type, meta } = yield take('*')
    yield call(track, type, meta)
  }
}

export function* watchGTMStart() {
  const { payload } = yield take(actions.GTM_START)
  yield all([
    call(startGTM, payload),
    call(watchAllActions),
  ])
}

export default function* () {
  yield fork(watchGTMStart)
}
