export const initialState = {}

export const getForm = (state = initialState, form) => state[form] || {}
export const getValues = (state = initialState, form) => getForm(state, form).values || {}
export const getCsrfToken = (state = initialState) => state.csrfToken
