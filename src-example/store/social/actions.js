// https://github.com/diegohaz/arc/wiki/Actions
export const SOCIAL_LOGIN = 'SOCIAL_LOGIN'
export const SOCIAL_LOGIN_PREPARE = 'SOCIAL_LOGIN_PREPARE'
export const SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST'
export const SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS'
export const SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE'
export const SOCIAL_LOGOUT = 'SOCIAL_LOGOUT'

export const socialLoginPrepare = (service, options) => ({
  type: SOCIAL_LOGIN_PREPARE,
  service,
  options,
})

export const socialLoginRequest = (service, options) => ({
  type: SOCIAL_LOGIN_REQUEST,
  service,
  options,
})

export const socialLoginSuccess = user => ({
  type: SOCIAL_LOGIN_SUCCESS,
  user,
})

export const socialLoginFailure = error => ({
  type: SOCIAL_LOGIN_FAILURE,
  error,
})

export const socialLogout = () => ({ type: SOCIAL_LOGOUT })
