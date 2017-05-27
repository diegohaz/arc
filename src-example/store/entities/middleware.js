// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import { normalize } from 'normalizr'
import { env } from 'config'
import { entitiesReceive } from './actions'
import * as schemas from './schemas'

const middleware = store => next => (action) => {
  const { payload, meta } = action

  if (meta && meta.entities) {
    const schema = schemas[meta.entities]

    if (schema) {
      const { result, entities } = normalize(
        payload,
        Array.isArray(payload) ? [schema] : schema
      )
      store.dispatch(entitiesReceive(entities))
      return next({ ...action, payload: result })
    }
    // istanbul ignore next
    if (env === 'development') {
      // eslint-disable-next-line no-console
      console.warn(`[entities] There is no ${meta.entities} schema on schemas.js`)
    }
  }
  return next(action)
}

export default middleware
