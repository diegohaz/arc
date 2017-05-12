// https://github.com/diegohaz/arc/wiki/Reducers
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import mergeWith from 'lodash/mergeWith'
import { initialState } from './selectors'
import { ENTITIES_RECEIVE } from './actions'

export default (state = initialState, { type, payload }) => {
  if (type === ENTITIES_RECEIVE) {
    return mergeWith({}, state, payload, (objValue, srcValue) => {
      if (Array.isArray(srcValue)) {
        return srcValue
      }
      return undefined
    })
  }
  return state
}
