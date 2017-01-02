export const initialState = {}

export const getEntity = (state = initialState, entity) => state[entity] || {}

export const getDetail = (state = initialState, entity, id) => getEntity(state, entity)[id]

export const getList = (state = initialState, entity, ids) =>
  (ids || Object.keys(getEntity(state, entity))).map((id) => getDetail(state, entity, id))
