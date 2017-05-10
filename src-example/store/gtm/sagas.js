// https://github.com/diegohaz/arc/wiki/Sagas
import loadScript from 'simple-load-script'
import { all, take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export function* track({ type, ...action }) {
  try {
    // istanbul ignore next
    window.dataLayer = window.dataLayer || []
    yield window.dataLayer.push({ event: type, ...action })
  } catch (e) {
    yield put(actions.gtmFailure(e, { type, ...action }))
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
    const action = yield take('*')
    yield call(track, action)
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
