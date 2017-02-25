import { initialState } from './selectors'
import { POST_CREATE_SUCCESS, POST_LIST_READ_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        list: [action.detail, ...state.list],
      }
    case POST_LIST_READ_SUCCESS:
      return {
        ...state,
        list: action.list,
      }
    default:
      return state
  }
}
