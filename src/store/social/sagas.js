import { take, put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'

export const promises = {
  fbLogin: (options) => new Promise((resolve, reject) => {
    window.FB.login((response) => {
      // istanbul ignore else
      if (response.authResponse) {
        resolve(response.authResponse)
      } else {
        reject(response.status)
      }
    }, options)
  }),
  fbGetMe: (options) => new Promise((resolve) => {
    window.FB.api('/me', options, (me) => resolve(me))
  }),
  loadGoogleAuth2: () => new Promise((resolve) => {
    window.gapi.load('auth2', resolve)
  }),
  loadScript: (src) => new Promise((resolve, reject) => {
    const js = document.createElement('script')
    js.src = src
    js.onload = resolve
    js.onerror = reject
    document.head.appendChild(js)
  }),
}

export const appendFbRoot = () => {
  const fbRoot = document.createElement('div')
  fbRoot.id = 'fb-root'
  document.body.appendChild(fbRoot)
}

export const serviceAction = (suffix, service) => (action) =>
  action.type === `SOCIAL_LOGIN_${suffix}` && action.service === service

export function* loginFacebook({ scope = 'public_profile', fields = 'id,name', ...options } = {}) {
  try {
    yield call(promises.fbLogin, { scope, ...options })
    const data = yield call(promises.fbGetMe, { fields })
    const picture = `https://graph.facebook.com/${data.id}/picture?type=normal`
    yield put(actions.socialLoginSuccess({ ...data, picture }))
  } catch (e) {
    yield put(actions.socialLoginFailure(e))
  }
}

export function* prepareFacebook({ appId, version = 'v2.8', ...options }) {
  try {
    yield call(appendFbRoot)
    yield call(promises.loadScript, '//connect.facebook.net/en_US/sdk.js')
    yield call([window.FB, window.FB.init], { appId, version, ...options })
  } catch (e) {
    yield put(actions.socialLoginFailure(e))
  }
}

export function* watchSocialLoginFacebook() {
  const { options } = yield take(serviceAction('PREPARE', 'facebook'))
  yield call(prepareFacebook, options)
  while (true) {
    const { options } = yield take(serviceAction('REQUEST', 'facebook'))
    yield call(loginFacebook, options)
  }
}

export function* loginGoogle({ scope = 'profile', ...options } = {}) {
  try {
    const auth2 = yield call(window.gapi.auth2.getAuthInstance)
    const user = yield call([auth2, auth2.signIn], { scope, ...options })
    const profile = yield call([user, user.getBasicProfile])
    const name = yield call([profile, profile.getName])
    const picture = yield call([profile, profile.getImageUrl])
    yield put(actions.socialLoginSuccess({ name, picture }))
  } catch (e) {
    yield put(actions.socialLoginFailure(e))
  }
}

export function* prepareGoogle({ client_id, ...options }) {
  try {
    yield call(promises.loadScript, '//apis.google.com/js/platform.js')
    yield call(promises.loadGoogleAuth2)
    yield call(window.gapi.auth2.init, { client_id, ...options })
  } catch (e) {
    yield put(actions.socialLoginFailure(e))
  }
}

export function* watchSocialLoginGoogle() {
  const { options } = yield take(serviceAction('PREPARE', 'google'))
  yield call(prepareGoogle, options)
  while (true) {
    const { options } = yield take(serviceAction('REQUEST', 'google'))
    yield call(loginGoogle, options)
  }
}

export default function* () {
  yield fork(watchSocialLoginFacebook)
  yield fork(watchSocialLoginGoogle)
}
