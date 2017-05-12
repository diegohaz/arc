// https://github.com/diegohaz/arc/wiki/Actions#unit-testing-actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
import * as actions from './actions'

test('socialLoginPrepare', () => {
  expect(actions.socialLoginPrepare('facebook')).toEqual({
    type: actions.SOCIAL_LOGIN_PREPARE,
    payload: {
      service: 'facebook',
    },
  })

  expect(actions.socialLoginPrepare('facebook', { clientId: 'foo' })).toEqual({
    type: actions.SOCIAL_LOGIN_PREPARE,
    payload: {
      service: 'facebook',
      clientId: 'foo',
    },
  })
})

test('socialLoginRequest', () => {
  expect(actions.socialLoginRequest('facebook')).toEqual(
    expect.objectContaining({
      type: actions.SOCIAL_LOGIN_REQUEST,
      payload: {
        service: 'facebook',
      },
    })
  )
  expect(actions.socialLoginRequest('facebook', { clientId: 'foo' })).toEqual(
    expect.objectContaining({
      type: actions.SOCIAL_LOGIN_REQUEST,
      payload: {
        service: 'facebook',
        clientId: 'foo',
      },
    })
  )
})

test('socialLoginSuccess', () => {
  expect(actions.socialLoginSuccess(1, 'foo')).toEqual({
    type: actions.SOCIAL_LOGIN_SUCCESS,
    payload: 1,
    meta: {
      request: 'foo',
    },
  })
})

test('socialLoginFailure', () => {
  expect(actions.socialLoginFailure('test', 'foo')).toEqual({
    type: actions.SOCIAL_LOGIN_FAILURE,
    error: true,
    payload: 'test',
    meta: {
      request: 'foo',
    },
  })
})

test('socialLogout', () => {
  expect(actions.socialLogout()).toEqual({ type: actions.SOCIAL_LOGOUT })
})
