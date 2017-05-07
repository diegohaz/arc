// https://github.com/diegohaz/arc/wiki/Reducers
import { initialState } from './selectors'
import { POST_CREATE_SUCCESS, POST_LIST_READ_SUCCESS } from './actions'

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        list: [payload, ...state.list],
      }
    case POST_LIST_READ_SUCCESS:
      return {
        ...state,
        list: payload,
      }
    default:
      return state
  }
}
