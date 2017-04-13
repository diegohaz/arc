import { normalize } from 'normalizr'
import { actionsMeta } from './schemas'

const middleware = store => next => (action) => {
  const types = Object.keys(actionsMeta)
  if (types.indexOf(action.type) >= 0) {
    const meta = actionsMeta[action.type]
    const { result, entities } = normalize(action[meta.property], meta.schema)
    store.dispatch({ type: 'ENTITIES_RECEIVE', entities })
    return next({ ...action, [meta.property]: result })
  }
  return next(action)
}

export default middleware
