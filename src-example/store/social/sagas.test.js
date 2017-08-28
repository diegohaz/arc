// https://github.com/diegohaz/arc/wiki/Sagas#unit-testing-sagas
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import loadScript from 'simple-load-script'
import { put, call, fork } from 'redux-saga/effects'
import * as actions from './actions'
import saga, * as sagas from './sagas'

const profile = { getName: () => 'name', getImageUrl: () => 'imageUrl' }
const user = { getBasicProfile: () => profile }
const auth2 = { signIn: () => user }

window.gapi = {
  load: () => {},
  auth2: {
    init: () => auth2,
    getAuthInstance: () => auth2,
  },
}

window.FB = {
  init: () => {},
  login: cb => cb({ authResponse: 'foo' }),
  api: (endpoint, options, cb) => cb(),
}

describe('promises', () => {
  Object.keys(sagas.promises).forEach((promiseName) => {
    test(`${promiseName} returns a promise`, () => {
      const promise = sagas.promises[promiseName]
      expect(promise()).toBeInstanceOf(Promise)
    })
  })
})

test('appendFbRoot', () => {
  expect(document.querySelector('div#fb-root')).toBeFalsy()
  sagas.appendFbRoot()
  expect(document.querySelector('div#fb-root')).toBeTruthy()
})

test('serviceAction', () => {
  const action = (suffix, service) => ({ type: `SOCIAL_LOGIN_${suffix}`, payload: { service } })
  expect(sagas.serviceAction('REQUEST', 'facebook')(action('REQUEST', 'facebook'))).toBe(true)
  expect(sagas.serviceAction('REQUEST', 'facebook')(action('PREPARE', 'facebook'))).toBe(false)
  expect(sagas.serviceAction('REQUEST', 'facebook')(action('REQUEST', 'google'))).toBe(false)
})

describe('loginFacebook', () => {
  const request = {
    service: 'facebook',
    scope: 'public_profile',
    fields: 'id,name',
  }

  it('calls success', () => {
    const generator = sagas.loginFacebook()
    expect(generator.next().value)
      .toEqual(call(sagas.promises.fbLogin, { scope: 'public_profile' }))
    expect(generator.next().value).toEqual(call(sagas.promises.fbGetMe, { fields: 'id,name' }))
    expect(generator.next({ id: '123', name: 'name' }).value)
      .toEqual(put(actions.socialLoginSuccess({
        id: '123',
        name: 'name',
        picture: 'https://graph.facebook.com/123/picture?type=normal',
      }, request)))
  })

  it('calls failure', () => {
    const generator = sagas.loginFacebook()
    expect(generator.next().value)
      .toEqual(call(sagas.promises.fbLogin, { scope: 'public_profile' }))
    expect(generator.throw('test').value)
      .toEqual(put(actions.socialLoginFailure('test', request)))
  })
})

describe('prepareFacebook', () => {
  const payload = { clientId: 'test', foo: 'bar' }

  it('calls success', () => {
    const generator = sagas.prepareFacebook(payload)
    expect(generator.next().value).toEqual(call(sagas.appendFbRoot))
    expect(generator.next().value)
      .toEqual(call(loadScript, '//connect.facebook.net/en_US/sdk.js'))
    expect(generator.next().value)
      .toEqual(call([window.FB, window.FB.init], { appId: 'test', version: 'v2.8', foo: 'bar' }))
  })

  it('calls failure', () => {
    const request = { service: 'facebook', version: 'v2.8', ...payload }
    const generator = sagas.prepareFacebook(payload)
    expect(generator.next().value).toEqual(call(sagas.appendFbRoot))
    expect(generator.throw('test').value)
      .toEqual(put(actions.socialLoginFailure('test', request)))
  })
})

test('watchSocialLoginFacebook', () => {
  const payload = { foo: 'bar' }
  const generator = sagas.watchSocialLoginFacebook()
  generator.next()
  expect(generator.next({ payload }).value).toEqual(call(sagas.prepareFacebook, payload))
  generator.next()
  expect(generator.next({ payload }).value).toEqual(call(sagas.loginFacebook, payload))
})

describe('loginGoogle', () => {
  const request = { service: 'google', scope: 'profile' }

  it('calls success', () => {
    const generator = sagas.loginGoogle()
    expect(generator.next().value).toEqual(call(window.gapi.auth2.getAuthInstance))
    expect(generator.next(auth2).value)
      .toEqual(call([auth2, auth2.signIn], { scope: 'profile' }))
    expect(generator.next(user).value).toEqual(call([user, user.getBasicProfile]))
    expect(generator.next(profile).value).toEqual(call([profile, profile.getName]))
    expect(generator.next('name').value).toEqual(call([profile, profile.getImageUrl]))
    expect(generator.next('imageUrl').value)
      .toEqual(put(actions.socialLoginSuccess({ name: 'name', picture: 'imageUrl' }, request)))
  })

  it('calls failure', () => {
    const generator = sagas.loginGoogle()
    expect(generator.next().value).toEqual(call(window.gapi.auth2.getAuthInstance))
    expect(generator.throw('test').value)
      .toEqual(put(actions.socialLoginFailure('test', request)))
  })
})

describe('prepareGoogle', () => {
  const payload = { clientId: 'test', foo: 'bar' }

  it('calls success', () => {
    const generator = sagas.prepareGoogle(payload)
    expect(generator.next().value)
      .toEqual(call(loadScript, '//apis.google.com/js/platform.js'))
    expect(generator.next().value).toEqual(call(sagas.promises.loadGoogleAuth2))
    expect(generator.next().value)
      .toEqual(call(window.gapi.auth2.init, { client_id: 'test', foo: 'bar' }))
  })

  it('calls failure', () => {
    const generator = sagas.prepareGoogle(payload)
    expect(generator.next().value)
      .toEqual(call(loadScript, '//apis.google.com/js/platform.js'))
    expect(generator.throw('test').value)
      .toEqual(put(actions.socialLoginFailure('test', { service: 'google', ...payload })))
  })
})

test('watchSocialLoginGoogle', () => {
  const payload = { foo: 'bar' }
  const generator = sagas.watchSocialLoginGoogle()
  generator.next()
  expect(generator.next({ payload }).value).toEqual(call(sagas.prepareGoogle, payload))
  generator.next()
  expect(generator.next({ payload }).value).toEqual(call(sagas.loginGoogle, payload))
})

test('saga', () => {
  const generator = saga()
  expect(generator.next().value).toEqual(fork(sagas.watchSocialLoginFacebook))
  expect(generator.next().value).toEqual(fork(sagas.watchSocialLoginGoogle))
})
