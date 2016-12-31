import * as actions from './actions'

test('socialLogin', () => {
  expect(actions.socialLogin.prepare('facebook', 1)).toEqual({
    type: actions.SOCIAL_LOGIN_PREPARE,
    service: 'facebook',
    options: 1
  })

  expect(actions.socialLogin.request('facebook', 1)).toEqual({
    type: actions.SOCIAL_LOGIN_REQUEST,
    service: 'facebook',
    options: 1
  })

  expect(actions.socialLogin.success(1)).toEqual({
    type: actions.SOCIAL_LOGIN_SUCCESS,
    user: 1
  })

  expect(actions.socialLogin.failure('test')).toEqual({
    type: actions.SOCIAL_LOGIN_FAILURE,
    error: 'test'
  })
})

test('socialLogout', () => {
  expect(actions.socialLogout()).toEqual({ type: actions.SOCIAL_LOGOUT })
})
