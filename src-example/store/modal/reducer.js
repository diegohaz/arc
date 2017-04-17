// https://github.com/diegohaz/arc/wiki/Reducers
import { initialState } from './selectors'
import { MODAL_SHOW, MODAL_HIDE } from './actions'

export default (state = initialState, action) => {
  switch (action.type) {
    case MODAL_SHOW:
      return {
        ...state,
        [action.name]: true,
      }
    case MODAL_HIDE:
      if (action.name) {
        return {
          ...state,
          [action.name]: false,
        }
      }
      return initialState
    default:
      return state
  }
}
