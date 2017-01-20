import { reducer } from 'redux-form'
import { initialState } from './selectors'
import { FORM_SET_CSRF_TOKEN } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case FORM_SET_CSRF_TOKEN:
      return {
        ...state,
        csrfToken: action.token
      }
    default:
      return reducer(state, action)
  }
}
