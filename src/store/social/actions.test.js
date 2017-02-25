import * as actions from './actions'

test('socialLoginPrepare', () => {
  expect(actions.socialLoginPrepare('facebook', 1)).toEqual({
    type: actions.SOCIAL_LOGIN_PREPARE,
    service: 'facebook',
    options: 1,
  })
})

test('socialLoginRequest', () => {
  expect(actions.socialLoginRequest('facebook', 1)).toEqual({
    type: actions.SOCIAL_LOGIN_REQUEST,
    service: 'facebook',
    options: 1,
  })
})

test('socialLoginSuccess', () => {
  expect(actions.socialLoginSuccess(1)).toEqual({
    type: actions.SOCIAL_LOGIN_SUCCESS,
    user: 1,
  })
})

test('socialLoginFailure', () => {
  expect(actions.socialLoginFailure('test')).toEqual({
    type: actions.SOCIAL_LOGIN_FAILURE,
    error: 'test',
  })
})

test('socialLogout', () => {
  expect(actions.socialLogout()).toEqual({ type: actions.SOCIAL_LOGOUT })
})
