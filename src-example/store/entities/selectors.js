// https://github.com/diegohaz/arc/wiki/Selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#entities
import { denormalize } from 'normalizr'
import * as schemas from './schemas'

export const initialState = {}

export const getEntity = (state = initialState, entity) => state[entity] || {}

export const getEntityKeys = (state, entity) => Object.keys(getEntity(state, entity))

export const getDetail = (state = initialState, entity, id) => getEntity(state, entity)[id]

export const getList = (state = initialState, entity, ids) =>
  (ids || getEntityKeys(state, entity)).map(id => getDetail(state, entity, id))

export const getDenormalizedDetail = (state = initialState, entity, id) =>
  denormalize(id, schemas[entity], state)

export const getDenormalizedList = (state = initialState, entity, ids) =>
  denormalize(ids || getEntityKeys(state, entity), [schemas[entity]], state)
