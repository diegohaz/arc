// https://github.com/diegohaz/arc/wiki/Sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import loadScript from 'simple-load-script'
import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export const promises = {
  fbLogin: options => new Promise((resolve, reject) => {
    window.FB.login((response) => {
      // istanbul ignore else
      if (response.authResponse) {
        resolve(response.authResponse)
      } else {
        reject(response.status)
      }
    }, options)
  }),
  fbGetMe: options => new Promise((resolve) => {
    window.FB.api('/me', options, me => resolve(me))
  }),
  loadGoogleAuth2: () => new Promise((resolve) => {
    window.gapi.load('auth2', resolve)
  }),
}

export const appendFbRoot = () => {
  const fbRoot = document.createElement('div')
  fbRoot.id = 'fb-root'
  document.body.appendChild(fbRoot)
}

export const serviceAction = (suffix, service) => ({ type, payload }) =>
  type === `SOCIAL_LOGIN_${suffix}` && payload && payload.service === service

export function* loginFacebook({ scope = 'public_profile', fields = 'id,name', ...options } = {}) {
  const request = {
    service: 'facebook', scope, fields, ...options,
  }
  try {
    yield call(promises.fbLogin, { scope, ...options })
    const data = yield call(promises.fbGetMe, { fields })
    const picture = `https://graph.facebook.com/${data.id}/picture?type=normal`
    yield put(actions.socialLoginSuccess({ ...data, picture }, request))
  } catch (e) {
    yield put(actions.socialLoginFailure(e, request))
  }
}

export function* prepareFacebook({ clientId, version = 'v2.8', ...options }) {
  const request = {
    service: 'facebook', clientId, version, ...options,
  }
  try {
    yield call(appendFbRoot)
    yield call(loadScript, '//connect.facebook.net/en_US/sdk.js')
    yield call([window.FB, window.FB.init], { appId: clientId, version, ...options })
  } catch (e) {
    yield put(actions.socialLoginFailure(e, request))
  }
}

export function* watchSocialLoginFacebook() {
  const { payload } = yield take(serviceAction('PREPARE', 'facebook'))
  yield call(prepareFacebook, payload)
  while (true) {
    const { payload } = yield take(serviceAction('REQUEST', 'facebook'))
    yield call(loginFacebook, payload)
  }
}

export function* loginGoogle({ scope = 'profile', ...options } = {}) {
  const request = { service: 'google', scope, ...options }
  try {
    const auth2 = yield call(window.gapi.auth2.getAuthInstance)
    const user = yield call([auth2, auth2.signIn], { scope, ...options })
    const profile = yield call([user, user.getBasicProfile])
    const name = yield call([profile, profile.getName])
    const picture = yield call([profile, profile.getImageUrl])
    yield put(actions.socialLoginSuccess({ name, picture }, request))
  } catch (e) {
    yield put(actions.socialLoginFailure(e, request))
  }
}

export function* prepareGoogle({ clientId, ...options }) {
  const request = { service: 'google', clientId, ...options }
  try {
    yield call(loadScript, '//apis.google.com/js/platform.js')
    yield call(promises.loadGoogleAuth2)
    yield call(window.gapi.auth2.init, { client_id: clientId, ...options })
  } catch (e) {
    yield put(actions.socialLoginFailure(e, request))
  }
}

export function* watchSocialLoginGoogle() {
  const { payload } = yield take(serviceAction('PREPARE', 'google'))
  yield call(prepareGoogle, payload)
  while (true) {
    const { payload } = yield take(serviceAction('REQUEST', 'google'))
    yield call(loginGoogle, payload)
  }
}

export default function* () {
  yield fork(watchSocialLoginFacebook)
  yield fork(watchSocialLoginGoogle)
}
