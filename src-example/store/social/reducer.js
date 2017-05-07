// https://github.com/diegohaz/arc/wiki/Reducers
import { initialState } from './selectors'
import { SOCIAL_LOGIN_SUCCESS, SOCIAL_LOGOUT } from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case SOCIAL_LOGIN_SUCCESS:
      return {
        ...state,
        user: payload,
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
