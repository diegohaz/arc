// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#social
export const SOCIAL_LOGIN = 'SOCIAL_LOGIN'
export const SOCIAL_LOGIN_PREPARE = 'SOCIAL_LOGIN_PREPARE'
export const SOCIAL_LOGIN_REQUEST = 'SOCIAL_LOGIN_REQUEST'
export const SOCIAL_LOGIN_SUCCESS = 'SOCIAL_LOGIN_SUCCESS'
export const SOCIAL_LOGIN_FAILURE = 'SOCIAL_LOGIN_FAILURE'
export const SOCIAL_LOGOUT = 'SOCIAL_LOGOUT'

export const socialLoginPrepare = (service, { clientId, ...options } = {}) => ({
  type: SOCIAL_LOGIN_PREPARE,
  payload: {
    service,
    clientId,
    ...options,
  },
})

export const socialLoginRequest = (service, { clientId, ...options } = {}) => ({
  type: SOCIAL_LOGIN_REQUEST,
  payload: {
    service,
    clientId,
    ...options,
  },
  meta: {
    // https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
    gtm: service,
  },
})

export const socialLoginSuccess = (user, request) => ({
  type: SOCIAL_LOGIN_SUCCESS,
  payload: user,
  meta: {
    request,
  },
})

export const socialLoginFailure = (error, request) => ({
  type: SOCIAL_LOGIN_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
  },
})

export const socialLogout = () => ({ type: SOCIAL_LOGOUT })
