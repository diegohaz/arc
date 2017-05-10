// https://github.com/diegohaz/arc/wiki/Actions
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#gtm
export const GTM = 'GTM'
export const GTM_START = 'GTM_START'
export const GTM_FAILURE = 'GTM_FAILURE'

export const gtmStart = gtmId => ({
  type: GTM_START,
  payload: {
    gtmId,
  },
})

export const gtmFailure = (error, request) => ({
  type: GTM_FAILURE,
  error: true,
  payload: error,
  meta: {
    request,
  },
})
