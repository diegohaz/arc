export const SOCIAL_LOGIN = 'SOCIAL_LOGIN'
export const SOCIAL_LOGIN_PREPARE = 'SOCIAL_LOGIN_PREPARE'
export const SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST'
export const SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS'
export const SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE'
export const SOCIAL_LOGOUT = 'SOCIAL_LOGOUT'

export const socialLogin = {
  prepare: (service, options) => ({ type: SOCIAL_LOGIN_PREPARE, service, options }),
  request: (service, options) => ({ type: SOCIAL_LOGIN_REQUEST, service, options }),
  success: (user) => ({ type: SOCIAL_LOGIN_SUCCESS, user }),
  failure: (error) => ({ type: SOCIAL_LOGIN_FAILURE, error })
}

export const socialLogout = () => ({ type: SOCIAL_LOGOUT })
