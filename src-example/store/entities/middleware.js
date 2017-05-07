import { normalize } from 'normalizr'
import { actions } from './schemas'

const middleware = store => next => (action) => {
  const types = Object.keys(actions)
  if (types.indexOf(action.type) >= 0) {
    const { result, entities } = normalize(action.payload, actions[action.type])
    store.dispatch({ type: 'ENTITIES_RECEIVE', entities })
    return next({ ...action, payload: result })
  }
  return next(action)
}

export default middleware
