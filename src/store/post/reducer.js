import { initialState } from './selectors'
import { POST_LIST_SUCCESS, POST_CREATE_SUCCESS } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case POST_LIST_SUCCESS:
      return {
        ...state,
        list: action.list
      }
    case POST_CREATE_SUCCESS:
      return {
        ...state,
        list: [ action.data, ...state.list ]
      }
    default:
      return state
  }
}
