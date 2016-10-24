export const FORM_SET_CSRF_TOKEN = 'FORM_SET_CSRF_TOKEN'

export const setCsrfToken = (token) => ({
  type: FORM_SET_CSRF_TOKEN,
  token
})
