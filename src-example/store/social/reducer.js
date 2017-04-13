import { initialState } from './selectors'
import { SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGOUT } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        user: action.user,
      }
    case SOCIAL_LOGOUT:
      return {
        ...state,
        user: initialState.user,
      }
    default:
      return state
  }
}
